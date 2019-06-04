var primitives = require('./primitives');
var Selector = require('./selector');
var resources = require('./resources');
var NBTParser = require('./nbt');
var logger = require('./logs');


var parsers = {};

parsers["minecraft:block_pos"] = function(){
  var num1 = this.iter.peek();
  if(num1.startsWith("^")){
    this.useParserSimple("custom:carrot");
  }else{
    this.useParserSimple("custom:block_coordinate");
    this.useParserSimple("custom:block_coordinate");
    this.useParserSimple("custom:block_coordinate");
  }
}
parsers["minecraft:vec3"] = function(){
  var num1 = this.iter.peek();
  if(num1.startsWith("^")){
    this.useParserSimple("custom:carrot");
  }else{
    this.useParserSimple("custom:coordinate");
    this.useParserSimple("custom:coordinate");
    this.useParserSimple("custom:coordinate");
  }
}
parsers["minecraft:vec2"] = function(){
  this.useParserSimple("custom:coordinate");
  this.useParserSimple("custom:coordinate");
}
parsers["minecraft:rotation"] = function(){
  this.useParserSimple("minecraft:vec2");
}
parsers["minecraft:json_text"] = function(){
  this.iter.next();
}
parsers["minecraft:dimension"] = function(properties){
  var dimen = this.iter.next();
  if(dimen.startsWith("minecraft:")){
    dimen = dimen.substr(10);
  }
  if(dimen === "overworld" || dimen === "the_end" || dimen === "the_nether"){
    
  }else{
    throw new Error("'" + dimen + "' is not a valid dimension");
  }
}
parsers["minecraft:entity"] = function(properties){
  var sel = new Selector(this.iter.next());
  if(properties){
    if(properties.amount && properties.amount === ""){
      throw new Error("The specified selector allows more than one entity");
    }
    if(properties.type && properties.type === "players"){
      if(!sel.allowsOnlyPlayers()){
        throw new Error("The specified selector allows other entities than players");
      }
    }
  }
}
parsers["minecraft:resource_location"] = function(properties){
  this.iter.next();
}
parsers["minecraft:game_profile"] = function(properties){
  this.iter.next();
}
parsers["minecraft:column_pos"] = function(properties){
  this.useParserSimple("custom:block_coordinate");
  this.useParserSimple("custom:block_coordinate");
}

//TODO: BLOCK STATE
parsers["minecraft:block_state"] = function(properties){
  var type = this.iter.next();
  var ind = type.indexOf("[");
  var ind2 = type.indexOf("{");
  if(ind < 0 && ind2 > 0){
    ind = ind2;
  }else if(ind > 0 && ind2 > 0){
    ind = Math.min(ind, ind2);
  }
  if(ind > 0){
    type = type.substring(0, (ind));
  }
  if(!resources.isValid("minecraft:block", type)){
    throw new Error("Invalid block type: " + type);
  }
}
//TODO: BLOCK TYPE (+ TAGS)
parsers["minecraft:block_predicate"] = function(properties){
  this.iter.next();
  
}
//TODO: ITEM TYPE NBT
parsers["minecraft:item_stack"] = function(properties){
  var item = this.iter.next();
  var ind = item.indexOf("{")
  if(ind > 0){
    item = item.substring(0, (ind));
  }
  if(!resources.isValid("minecraft:item", item)){
    throw new Error("Invalid item name: " + item);
  }
}
//TODO: ITEM TYPE (+ TAGS / ALIASES #wool)
parsers["minecraft:item_predicate"] = function(properties){
  this.iter.next();
}


parsers["minecraft:color"] = function(properties){
  var col = this.iter.next().toLowerCase();
  if(!resources.colorList.hasOwnProperty(col)){
    throw new Error("Not a valid color: " + col);
  }
}

//TODO: CHAT COMPONENT
parsers["minecraft:component"] = function(properties){
  this.iter.next();
}
//TODO: MESSAGE (basically say ...) (greedy)
parsers["minecraft:message"] = function(properties){
  this.iter.next();
}
//TODO: NBT PATH
parsers["minecraft:nbt_path"] = function(properties){
  this.iter.next();
}

parsers["minecraft:nbt_tag"] = function(properties){
  var value = this.iter.next();
  var c = value.charAt(0);
  if(c === "'" || c === '"'){
    if(!value.charAt(value.length - 1) === c){
      throw new Error("No end quote in " + value);
    }else{
      value = value.substring(0, value.length - 1);
    }
  }else{
    
  }
}

 
parsers["minecraft:nbt_compound_tag"] = function(properties){
  var nbt = this.iter.next();
  new NBTParser(nbt).parseNBT();
}

//TODO: ITEM TYPE (+ TAGS)
parsers["minecraft:objective"] = function(properties){
  this.iter.next();
}
//TODO: ITEM TYPE (+ TAGS)
parsers["minecraft:objective_criteria"] = function(properties){
  this.iter.next();
}
//TODO: ITEM TYPE (+ TAGS)
parsers["minecraft:operation"] = function(properties){
  this.iter.next();
}


parsers["minecraft:particle"] = function(properties){
  var part = this.iter.next();
  if(!resources.isValid("minecraft:particle_type", part)){
    throw new Error("Invalid particle type: " + part);
  }
  if(!part.startsWith("minecraft:")){
    part = "minecraft:" + part;
  }
  //Hacky code because of the command is strange
  if(part === "minecraft:dust"){
    this.useParserSimple("brigadier:double");
    this.useParserSimple("brigadier:double");
    this.useParserSimple("brigadier:double");
    this.useParserSimple("brigadier:double");
  }else if(part === "minecraft:block" || part === "minecraft:falling_dust"){
    this.useParserSimple("minecraft:block_state");
  }else if(part === "minecraft:item"){
    this.useParserSimple("minecraft:item_stack");
  }
}
//TODO: SCORE_HOLDER
parsers["minecraft:score_holder"] = function(properties){
  this.iter.next();
}

//TODO: TEAM
parsers["minecraft:team"] = function(properties){
  this.iter.next();
}

//TODO: TEAM
parsers["minecraft:time"] = function(properties){
  var regex = /^(?:\-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]*))[dst]$/;
  var time = this.iter.next();
  if(!regex.test(time)){
    throw new Error("Not a valid time: " + time);
  }
}


//TODO: INT RANGE
parsers["minecraft:int_range"] = function(properties){
  this.iter.next();
}

parsers["minecraft:item_slot"] = function(properties){
  var rslot = this.iter.next();
  var slots = {
    only: ["weapon"],
    armor: ["head", "chest", "feet", "legs"],
    horse: ["armor", "chest", "saddle"],
    weapon: ["mainhand", "offhand"]
  }
  var slot = rslot.split(".");
  if(slot.length < 2){
    if(!slots.only.includes(slot[0])){
      throw new Error("Slot " + rslot + " does not exist")
    }
  }else if(slot.length > 2){
    throw new Error("Slot " + rslot + " does not exist")
  }
  if(slot[0] === "armor"){
    if(!slots.armor.includes(slot[1])){
      throw new Error("Slot " + rslot + " does not exist")
    }
  }else if(slot[0] === "weapon"){
    if(!slots.weapon.includes(slot[1])){
      throw new Error("Slot " + rslot + " does not exist")
    }
  }else{
    var num = parseInt(slot[1]);
    if(slot[0] === "villager"){
      if(num < 0 || num > 7){
        throw new Error("Slot " + rslot + " does not exist")
      }
    }else if(slot[0] === "container"){
      if(num < 0 || num > 53){
        throw new Error("Slot " + rslot + " does not exist")
      }
    }else if(slot[0] === "enderchest"){
      if(num < 0 || num > 26){
        throw new Error("Slot " + rslot + " does not exist")
      }
    }else if(slot[0] === "hotbar"){
      if(num < 0 || num > 8){
        throw new Error("Slot " + rslot + " does not exist")
      }
    }else if(slot[0] === "inventory"){
      if(num < 0 || num > 26){
        throw new Error("Slot " + rslot + " does not exist")
      }
    }else if(slot[0] === "horse"){
      if((num < 0 || num > 14) &! slots.horse.includes(slot[1])){
        throw new Error("Slot " + rslot + " does not exist")
      }
    }
  }
}
//TODO: FUNCTION
parsers["minecraft:function"] = function(properties){
  this.iter.next();
}

parsers["minecraft:entity_anchor"] = function(properties){
  var anchor = this.iter.next();
  if(anchor !== "feet" && anchor !== "eyes"){
    throw new Error("Anchor must be either feet or eyes");
  }
}

parsers["minecraft:item_enchantment"] = function(properties){
  var ench = this.iter.next();
  if(!resources.isValid("minecraft:enchantment", ench)){
    throw new Error("Invalid enchantment: " + ench);
  }
}

parsers["minecraft:entity_summon"] = function(properties){
  var type = this.iter.next();
  if(!resources.isValid("minecraft:entity_type", type)){
    throw new Error("Invalid entity type: " + type);
  }
}

//TODO EFFECT TYPE
parsers["minecraft:mob_effect"] = function(properties){
  var type = this.iter.next();
  if(!resources.isValid("minecraft:mob_effect", type)){
    throw new Error("Invalid mob effect: " + type);
  }
}
parsers["minecraft:swizzle"] = function(properties){
  var axes = this.iter.next();
  if(axes.length > 3 || axes.length === 0){
    throw new Error("Axes must be a combination of x, y and z");
  }else{
    let x = false, y = false, z = false;
    for(let i = 0; i < axes.length; i++){
      let c = axes.charAt(i);
      if(c === "x"){
        if(x){
          throw new Error("You can't have more than one of x, y or z")
        }
        x = true;
      }else if(c === "y"){
        if(y){
          throw new Error("You can't have more than one of x, y or z")
        }
        y = true;
      }else if(c === "z"){
        if(z){
          throw new Error("You can't have more than one of x, y or z")
        }
        z = true;
      }else{
        throw new Error("Axes must be a combination of x, y and z");
      }
    }
  }
}

parsers["brigadier:integer"] = function(properties){
  var num = this.iter.next();
  primitives.integer(num, properties);
}
parsers["brigadier:string"] = function(properties){
  var str = this.iter.next();
  if(properties && properties.type === "greedy"){
    while(this.iter.next()){
      //Do sth
    }
  }else{
    primitives.string(str, properties);
  }
}
parsers["brigadier:double"] = function(properties){
  var num = this.iter.next();
  primitives.double(num, properties);
}
parsers["brigadier:float"] = function(properties){
  var num = this.iter.next();
  primitives.double(num, properties);
}
parsers["brigadier:bool"] = function(properties){
  var bool = this.iter.next();
  primitives.bool(bool, properties);
}


parsers["custom:block_coordinate"] = function(properties){
  var regex = /^(?:-?[0-9]+|~-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]*))?$/;
  var num = this.iter.next();
  if(!regex.test(num)){
    throw new Error("Coordinate not valid");
  }
}
parsers["custom:coordinate"] = function(properties){
  var regex = /^(?:~?\-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]*))?$/;
  var num = this.iter.next();
  if(!regex.test(num)){
    throw new Error("Coordinate not valid");
  }
}
parsers["custom:carrot"] = function(){
  var regex = /^\^(?:-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]+))?$/;
  for(let i = 0; i < 3; i++){
    let num = this.iter.next();
    if(!regex.test(num)){
      throw new Error("Carrot coordinates not valid");
    }
  }
}
parsers["custom:double"] = function(iter){
 // \^[0-9]*(?:\.)?(?:[0-9]+)?
}


module.exports = parsers;