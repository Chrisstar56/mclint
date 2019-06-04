var primitives = require("./primitives");
var utils = require("./utils");

class NBTParser {
  constructor(nbt) {
    this.snbt = nbt;
    this.nbt = {};
  }
  
  _parseKey(){
    var c = (this.snbt.charAt(this.pos));
    var key;
    if(c === '"' || c === "'"){
      key = this.snbt.substring(this.pos, this.snbt.indexOf(c, this.pos + 1)).trim();
    }else{
      key = this.snbt.substring(this.pos, this.snbt.indexOf(":", this.pos + 1) - 1).trim();
    }
    this.pos = this.snbt.indexOf(":") + 1;
    primitives.string(key, {type: 'word'});
    return key;
  }
  
  _parseObject(str){
    str = str.trim();
    if(str.charAt(0) !== "{" || str.charAt(str.length - 1) !== "}"){
      throw new Error("NBT compounds must be surrounded by curly brackets");
    }
    str = str.substring(1, str.length - 2);
    return str;
  }
  
  parseNBT(){
    if(this.snbt.charAt(0) !== "{" || this.snbt.charAt(this.snbt.length - 1) !== "}"){
      throw new Error("NBT data must be surrounded by curly brackets");
    }
    this.pos = 1;
    var res = "";
    var brackets_square = 0;
    var brackets_curly = 0;
    var in_quote = "none";
    var ignore = false;
    while(this.pos < (this.snbt.length - 1)){
      if(ignore){
        ignore = false;
        continue;
      }
      let c = this.snbt.charAt(this.pos);
      if(c === '{'){
        brackets_curly++;
      }else if(c === '}'){
        brackets_curly--;
      }else if(c === '['){
        brackets_square++;
      }else if(c === ']'){
        brackets_square--;
      }else if(c === '"' && in_quote === "double"){
        in_quote = "none";
      }else if(c === '\'' && in_quote === "single"){
        in_quote = "none";
      }else if(c === '"' && in_quote === "none"){
        in_quote = "double";
      }else if(c === '\'' && in_quote === "none"){
        in_quote = "single";
      }else if(c === '\\'){
        ignore = true;
      }else if(c === '}'){
        brackets_curly--;
      }
      this.pos++;
    }
    if(brackets_square !== 0 || brackets_curly !== 0 || in_quote !== "none"){
      throw new Error("NBT format error");
    }
    return res;
  }
}
module.exports = NBTParser;
