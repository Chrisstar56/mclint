var resources = require("./resources");
var primitives = require("./primitives");

var parsers = {};

parsers["limit"] = function(value, properties){
  properties = properties || {};
  properties.min = "1";
  return parsers["integer"](value, properties);
}
//TODO: nbt
parsers["nbt"] = function(value, properties){
  return value;
}
//TODO: advancements
parsers["advancements"] = function(value, properties){
  return value;
}
parsers["integer"] = function(value, properties){
  var regex = /^-?[0-9]+$/;
  if(!regex.test(value)){
    throw new Error("Not an integer");
  }
  value = parseInt(value);
  if(properties){
    if(properties.max && value > properties.max){
      throw new Error("Integer must not be greater than " + properties.max);
    }
    if(properties.min && value < properties.min){
      throw new Error("Integer must not be less than " + properties.min);
    }
  }
  return value;
}
parsers["range"] = function(value, properties){
  if(properties.type == "integer"){
    return parsers["range_integer"](value, properties);
  } else {
    return parsers["range_double"](value, properties);
  }
}
parsers["range_double"] = function(value, properties){
  var split = value.split("..");
  var res = {};
  if(split.length === 1){
    res.only = parsers["double"](value, properties);
  }else if(split.length === 2){
    res.min = parsers["double"](split[0], properties);
    if(split[1].startsWith(".")){
      throw new Error("Invalid Range");
    }
    res.max = parsers["double"](split[1], properties);
    if(res.max < res.min){
      if(!(properties && properties.minBiggerThanMax)){
        throw new Error("Invalid Range: Min cannot be bigger than max");
      }
    }
  }else{
    throw new Error("Invalid Range");
  }
  return res;
}
parsers["range_integer"] = function(value, properties){
  var split = value.split("..");
  var res = {};
  if(split.length === 1){
    res.only = parsers["integer"](value, properties);
  }else if(split.length === 2){
    res.min = parsers["integer"](split[0], properties);
    res.max = parsers["integer"](split[1], properties);
    if(!(properties && properties.minBiggerThanMax)){
        throw new Error("Invalid Range: Min cannot be bigger than max");
      }
  }else{
    throw new Error("Invalid Range");
  }
  return res;
}
parsers["list"] = function(value, properties){
  if(!(properties && properties.values && properties.values.includes(value))){
    throw new Error("'" + value + "' is not one of the allowed values");
  }
  return value;
}
parsers["name"] = function(value, properties){
  return primitives.string(value, properties);
}
//TODO: scores
parsers["score"] = function(value, properties){
  return value;
}
parsers["entity"] = function(value, properties){
  if(value.startsWith("minecraft:")){
    value = value.substr(10);
  }
  if(value === 'player' || resources.isValid("minecraft:entity_type", value)){
    return "minecraft:" + value;
  }else{
    throw new Error("Not a valid entity: minecraft:" + value);
  }
}

parsers["limit"] = function(value, properties){
  properties = properties || {};
  properties.min = "1";
  return parsers["integer"](value, properties);
}
parsers["double"] = function(value, properties){
  var regex = /^(?:-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]+))?$/;
  if(!regex.test(value)){
    throw new Error("Not a double value");
  }
  value = parseFloat(value);
  if(properties){
    if(properties.max && value > properties.max){
      throw new Error("Double must not be greater than " + properties.max);
    }
    if(properties.min && value < properties.min){
      throw new Error("Double must not be less than " + properties.min);
    }
  }
  return value;
}

parsers["string"] = function(value, properties){
  if(properties){
    if(properties.type === 'word'){
      var regex = /^[._+\-a-zA-Z0-9]*$/;
      if(!regex.test(value)){
        throw new Error("String not valid");
      }
    }
  }
  return value;
}

parsers["custom:selector"] = function(properties){
  
}

parsers["custom:block_coordinate"] = function(properties){
  var regex = /^(?:-?[0-9]+|~-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]*))?$/;
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
}


module.exports = parsers;