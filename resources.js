var registries = require("./resources/registries.json");

var resources = {};
resources.colorList = {"black": 0, "dark_blue": 1, "dark_green": 2, "dark_cyan": 3, "dark_red": 4, "purple": 5, "gold": 6, "gray": 7, "dark_gray": 8, "blue": 9, "green": 'a', "aqua": 'b', "red": 'c', "light_purple": 'd', "yellow": 'e', "white": 'f'};

resources.isValid = function(type, id){
  if(!id.startsWith("minecraft:")){
    id = "minecraft:" + id;
  }
  var resource = registries[type];
  if(resource && resource.entries && resource.entries[id]){
    return true;
  }
  return false;
};
module.exports = resources;