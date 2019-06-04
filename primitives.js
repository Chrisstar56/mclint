var resources = require("./resources/ids");

var parsers = {};

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

parsers["bool"] = function(value, properties){
  if(value === "true"){
    return true;
  }else if(value === "false"){
    return false;
  }else{
    throw new Error("Not a boolean value");
  }
}

parsers["double"] = function(value, properties){
  var regex = /^(?:-?(?:[0-9]*\.[0-9]+|[0-9]+\.|[0-9]+))?$/;
  if(!regex.test(value)){
    throw new Error("Not a double value: " + value);
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
        throw new Error("String not valid: " + value);
      }
    }
  }else{
    var c = value.charAt(0);
    if(c === "'" || c === '"'){
      if(!value.charAt(value.length - 1) === c){
        throw new Error("No end quote in " + value);
      }else{
        value = value.substring(0, value.length - 1);
      }
    }
  }
  return value;
}


module.exports = parsers;