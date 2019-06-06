var filters = require('./resources/selector.js');
var Utils = require('./utils.js');
var parsers = require('./filters');
var logger = require('./logs.js');

var filter_types = {
  x: {parser: 'double', multiple: false, negate: false},
  y: {parser: 'double', multiple: false, negate: false},
  z: {parser: 'double', multiple: false, negate: false},
  distance: {parser: 'range', properties: {min: 0, type: 'double', minBiggerThanMax: false}, multiple: false, negate: false},
  dx: {parser: 'double', multiple: false, negate: false},
  dy: {parser: 'double', multiple: false, negate: false},
  dz: {parser: 'double', multiple: false, negate: false},
  limit: {parser: 'integer', properties: {min: 1}, multiple: false, negate: false},
  sort: {parser: 'list', properties: {values:['furthest', 'nearest', 'arbitrary', 'random']}, multiple: false, negate: false},
  gamemode: {parser: 'list', properties: {values:['survival', 'creative', 'adventure', 'spectator']}, multiple: false, negate: true},
  level: {parser: 'range', properties: {min: 0, type: 'double', minBiggerThanMax: false}, multiple: false, negate: false},
  x_rotation: {parser: 'range', properties: {type: 'double', minBiggerThanMax: true}, multiple: false, negate: false},
  y_rotation: {parser: 'range', properties: {type: 'double', minBiggerThanMax: true}, multiple: false, negate: false},
  scores: {parser: 'score', multiple: false, negate: false},
  team: {parser: 'string', properties: {type: 'word'}, multiple: false, negate: true},
  name: {parser: 'name', multiple: false, negate: true},
  type: {parser: 'entity', multiple: false, negate: true},
  tag: {parser: 'string', properties: {type: 'word'}, multiple: true, negate: true},
  nbt: {parser: 'nbt', multiple: true, negate: true},
  advancements: {parser: 'advancements', multiple: false, negate: false}
};
class Selector {
  //Type: 'player', 'selector', (TODO: 'uuid')
  //Base: @a, @e, @p, @r, @s
  //Arguments/Filters: [type=..., nbt=...]
  //Filters: {type: NAME, op: != / =, value: VALUE}
  
  //TODO: selector filter multiple/single
  
  constructor () {
    this.type = '';
    this.base = '';
    this.filters = {};
    if(Utils.getObjectType(arguments[0]) === 'String'){
      this.constructFromString(arguments[0]);
    }
  }
  
  constructFromString (str) {
    str = Utils.trimAndRemoveComments(str); //TODO: is necessary?
    var c = str.charAt(0);
    //Check wether it is a normal selector
    if(c === '@'){
      //Check whether it is @a, @e, @r, @s, @p
      c = str.charAt(1);
      if(!(c === 'a' || c === 'e' || c === 'r' || c === 's' || c == 'p')){
        throw new Error("Invalid Selector: " + str);
      }
      this.base = '@' + c;
      this.type = 'selector';
      //Test for arguments
      if(str.length == 2){
        return;
      }
      if(str.charAt(2) !== '['){
        throw new Error("Invalid selector, opening bracket missing: " + str);
      }
      //Get end position
      var l = str.length;
      var pos = 2;
      var endpos = pos + 1;
      var go = true;
      var inQuotes = false; //Pos is in quotes (ignore)
      var ignore = false; //Ignore next character
      var brackets = 0;
      while (endpos < l && go) {
        if(ignore){
          ignore = false;
          endpos++;
          continue;
        }
        c = str.charAt(endpos);
        if(c === '{' || c === '['){
          brackets++;
        }else if(brackets > 0 && (c === '}' || c === ']')){
          brackets--;
        }else if(c === '\\' && inQuotes){
          ignore = true;
        }else if(c === '"' && inQuotes === false){
          inQuotes = true;
        }else if(c === '"' && inQuotes){
          inQuotes = false;
        }else if(c === ']' && brackets === 0){
          go = false;
        }
        endpos++;
      }
      if(go){
        throw new Error("Terminating Bracket in Selector missing");
      }
      if(endpos < l){
        throw new Error("Invalid Selector: " + str);
      }
      var filters = str.substring(2);
      this.parseFilters(filters);
      this.checkFilters();
    }else{
      //TODO: UUID
      this.type = 'player';
      this.base = str;
      //TODO: Can a player have arguments? If yes unnecessary
    }
  }

  isSingle(){
    if(this.type === 'player' || this.type === 'uuid'){
      return true;
    }
    var limit = this.getFilter('limit');
    if((this.base === '@p' || this.base === '@r') &! limit){
      return true;
    }
    if(limit && limit[0].parsedValue === 1){
      return true;
    }
    return false;
  }
  
  allowsOnlyPlayers(){
    if(this.type === 'player' || this.type === 'uuid' || this.base === '@p' || this.base === '@a' || this.base === '@s'){
      return true;
    }
    var type = this.getFilter('type');
    if((this.base === '@p' || this.base === '@r') &! type){
      return true;
    }
    if(type && (type[0].value === 'minecraft:player' || type[0].value === 'player')){
      return true;
    }
    return false;
  }
  
  getFilter(name){
    if(!this.filters[name] || this.filters[name].length === 0){
      return false;
    }
    return this.filters[name];
  }
  
  parseFilters(str){
    var l = str.length;
    var pos = 0;
    //Must start with '[' and end with ']'
    if((str.charAt(0) !== '[') || (str.charAt(l - 1) !== ']')){
      throw new Error("Invalid Selector. Terminating or starting bracket missing.");
    }
    var raw_args = str.substring(1, l - 1);
    raw_args = Utils.splitButSkip(raw_args, ',');
    
    var check = /^([a-zA-Z_]+) *(=!|=) *(.*)$/;
    for(let filter of raw_args){
      filter = filter.trim();
      if(filter === '')continue;
      let res = check.exec(filter);
      if(!res || res.index !== 0){
        throw new Error("Invalid Selector Argument: " + filter);
      }
      let warg = {
        op: res[2],
        type: res[1]
      };//op: Operator, type: Type, value: value
      let type = res[1]; //Argument type
      let p = res[3];//Argument value
      
      if(!filter_types[type]){
        throw new Error("Unknown Selector Argument: " + res[1]);
      }
      
      if(warg.op === '=!'){
        if(type.negate === false){
          throw new Error("Selector Argument '" + res[1] + "' doesn't allow negation");
        }
      }
      warg.value = p;
      if(!this.filters[type]){
        this.filters[type] = [];
      }
      this.filters[type].push(warg);
    }
  }
  
  checkFilters() {
    //Iterate through every used filter
    for(let filter_type in this.filters){
      //Get Filter of type filter_type
      var filters = this.getFilter(filter_type);
      if(!filters)continue;
      
      //Get Filter Definition
      var filter_definition = filter_types[filter_type];
      if(!filter_definition){
        throw new Error("An Unknown Error has occured. This should not happen");
      }
      
      //Check for disallowed multiple occurences
      if(filters.length > 1 && filter_definition.multiple === false){
        if(filter_definition.negate === true){
          for(let filter of filters){
            if(filter.op === '='){
              throw new Error("There can't be more than one instance of: " + filter_type);
            }
          }
        }else{
          throw new Error("There can't be more than one instance of: " + filter_type);
        }
      }
      //Check for negation already done
      
      //Get Parser
      var parser = parsers[filter_definition.parser];
      if(!parser){
        //logger.warn(filter_type);
        logger.warn("Missing Parser: " + filter_definition.parser);
        continue;
      }
      for(let filter of filters){
        filter.parsedValue = parser(filter.value, filter_definition.properties);
      }
    }
  }
  
  toString() {
    if(this.filters.length == 0){
      return this.base;
    }else{
      var str = this.base + '[';
      var l = this.filters.length,
      i = 0,
      current;
      while(i < l){
        current = this.filters[i];
        if(++i < l){
          str += current.type + current.op + current.value + ",";
        }else{
          str += current.type + current.op + current.value;
        }
      }
      return str + ']';
    }
  }
}
/*
new Selector('@a[nbt={Inventory:[{id:"minecraft:iron_boots",Slot:100b,tag:{CustomModelData:2}}]}]');
//*/
module.exports = Selector;