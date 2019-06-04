var logger = require('./logs.js');

var Utils = {};
Utils.isWordCharacter = function(c){
  return (c >= 'a' && c <= 'z') ||
         (c >= 'A' && c <= 'Z') ||
         (c >= '0' && c <= '9') ||
         c === '_' || c === '$';
}
Utils.isNameCharacter = function(c){
  return (c >= 'a' && c <= 'z') ||
         (c >= 'A' && c <= 'Z') ||
         (c >= '0' && c <= '9') ||
         c === '_' || c === '$' ||
         c === '#' || c === '.';
}
Utils.trimAndRemoveComments = function(str){
  str = str.trim();
  if(str.charAt(0) === '#'){
    return "";
  }
  var pos = 0;
  var fs = false;
  var inQuotes = false;
  var ignore = false;
  while(pos < str.length){
    var c = str.charAt(pos);
    if(ignore){
      ignore = false;
      pos++;
      continue;
    }
    if(c === '\\' && inQuotes){
      ignore = true;
    }else if(c === '"' && inQuotes){
      inQuotes = false;
    }else if(c === '"'){
      inQuotes = true;
    }else if(c === '/' && fs){
      pos--;
      break;
    }else if(c === '/'){
      fs = true;
    }else if(fs){
      fs = false;
    }
    pos++;
  }
  return str.substring(0, pos).trim();
}
Utils.stripComments = function(lines){
  //Input array of lines
  var i = 0;
  var inBlockQuotes = false;
  while(i < lines.length){
    var line = lines[i];
    line = line.trim();
    if(line.charAt(0) === '#'){
      lines[i] = "";
      continue;
    }
    if(inBlockQuotes){
      let pos = 0;
      var l = line.length;
      while(pos < l){
        if(line.charAt(pos) === '*' && line.charAt(pos + 1) === '/'){
          pos += 2;
          inBlockQuotes = false;
          break;
        }
        pos++;
      }
      line = line.substring(pos);
      lines[i] = line;
      if(line === ""){
        i++;
      }
      continue;
    }
    let pos = 0;
    var fs = false;
    var inQuotes = false;
    while(pos < line.length){
      var c = line.charAt(pos);
      if(c === '\\' && inQuotes){
        pos++;
      }else if(c === '"' && inQuotes){
        inQuotes = false;
      }else if(c === '"'){
        inQuotes = true;
      }else if(c === '/' && fs){
        pos--;
        break;
      }else if(c === '*' && fs){
        inBlockQuotes = true;
        pos--;
        break;
      }else if(c === '/'){
        fs = true;
      }else if(fs){
        fs = false;
      }
      pos++;
    }
    lines[i] = line.substring(0, pos).trim();
    i++;
  }
  return lines;
}


Utils.splitButSkip = function(str, split){
  //Split by some character 'split', but don't in quotes or brackets -> TODO
  var l = str.length;
  var parts = [];
  var pos = 0;
  var endpos = pos;
  var go = true;
  var inQuotes = false;
  var brackets = 0;
  /*var curly_brackets = 0;
  var square_brackets = 0;*/
  var ignore = false;
  while (endpos < l && go) {
    if(ignore){
      ignore = false;
      endpos++;
      continue;
    }
    var c = str.charAt(endpos);
    if(c === '\\' && inQuotes){
      ignore = true;
    }else if(c === '"' && inQuotes === false){
      inQuotes = true;
    }else if(c === '"' && inQuotes){
      inQuotes = false;
    }else if(c === '[' || c === '{'){
      brackets++;
    }else if(c === ']' || c === '}'){
      brackets--;
    }else if(c === split && brackets === 0 &! inQuotes){
      parts.push(str.substring(pos, endpos));
      pos = endpos + 1;
    }
    endpos++;
  }
  parts.push(str.substring(pos, endpos));
  return parts;
}


Utils.replaceAll = function(str, find, repl){
  while(str.indexOf(find) >= 0){
      str = str.replace(find, repl);
  }
  return str;
}
Utils.getObjectType = function(obj){
  var str = Object.prototype.toString.call(obj);
  str = str.substring(8, str.length - 1);
  return str;
}

module.exports = Utils;