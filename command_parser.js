var Utils = require('./utils.js');
var ctree = require('./resources/command_tree');
var BIterator = require('./biterator.js');
var parsers = require('./parsers');
var logger = require('./logs');

function CommandParser(cmd, parent){
  cmd = cmd.trim();
  this.iter = new BIterator(Utils.splitButSkip(cmd, " "));
  this.pointer = ctree;
  this.lastCommand = "";
  this.parent = parent;
  this.parsers = parsers;
} 

CommandParser.prototype.useParser = function(id, pointer, catchErrors) {
  logger.debug("Parser call: " + id);
  var parser = this.parsers[id];
  if(!parser){
    logger.warn("Missing parser: " + id);
    this.iter.next();
    return true;
  }
  parser = parser.bind(this);
  parser(pointer.properties);
}
CommandParser.prototype.useParserSimple = function(id, properties) {
  logger.debug("Parser call: " + id);
  var parser = this.parsers[id];
  if(!parser){
    logger.warn("Missing parser: " + id);
    this.iter.next();
    return true;
  }
  parser = parser.bind(this);
  parser(properties);
}

CommandParser.prototype.parse = function(){
  this.parseNode();
}

CommandParser.prototype.parseNode = function(){
  if(this.iter.done){//Test if all arguments are already parsed
    if(this.pointer.executable){//Is command executable like this?
      return;
    }else{
      throw new Error("Missing argument");
    }
  }
  
  if(this.pointer.redirect){//Redirect term
    var redirect = this.pointer.redirect[0];
    this.lastCommand = redirect;
    if(redirect === 'root'){
      this.pointer = ctree;
    }else{
      this.pointer = ctree.children[redirect];
    }
  }
  
  if(!this.pointer.children){
    throw new Error("More arguments than expected");
  }
  var keys = Object.keys(this.pointer.children);
  if(this.pointer.type === 'root'){ //If at root command
    var peek = this.iter.peek();
    if(peek === "")return;
    var cc = this.pointer.children[peek];
    if(cc){
      this.iter.next();
      this.pointer = cc;
      this.parseNode();
    }else{
      throw new Error("Invalid Command: " + peek);
    }
  }else if(keys.length === 1){//if there is only one child
    var key = keys[0];
    var child = this.pointer.children[key];
    
    this.parseSingle(child, key);
    
    this.pointer = child;
    this.lastCommand = key;
    this.parseNode();
  }else if(keys.length > 1){//if there is more than one child;
    var peek = this.iter.peek();
    this.tryMultipleWays(keys);
  }else if(!this.iter.done){
    throw new Error("Too many arguments");
  }
}
CommandParser.prototype.tryMultipleWays = function(keys){
  var s = this.iter.pos;
  var p = this.pointer;
  this.iter.snap();
  var success = false;
  //Catch possible error
  var acceptedFirst = false;
  var er;

  //Test for literal (shortcut)
  var peek = this.iter.peek();
  if(this.pointer.children[peek]){
    try {
      this.parseSingle(this.pointer.children[peek], peek);
      this.pointer = child;
      this.parseNode();
      return;
    }catch (e){
      this.iter.rollback();
      this.iter.snap();
      this.pointer = p;
    }
  }
  
  for(var key of keys){
    var child = this.pointer.children[key];
    try {
      this.parseSingle(child, key);
      acceptedFirst = true;
      this.pointer = child;
      this.parseNode();
    }catch (e) {
      logger.debug("Parsing command failed, rollback: " + key);
      if(acceptedFirst)er = e;
      acceptedFirst = false;
      this.iter.rollback();
      this.iter.snap();
      this.pointer = p;
      continue;
    }
    success = true;
    break;
  }
  if(!success){
    if(er){
      if(er.message.startsWith("Possible Error")){
        throw er;
      }else{
        throw new Error("Possible Error: " + er.message);
      }
    }else{
      throw new Error("Invalid argument: " + this.iter.current);
    }
  }
}



CommandParser.prototype._parseNode = function(){
  //TODO: Split in multiple functions
  if(this.iter.done){//Test if all arguments are already parsed
    if(this.pointer.executable){//Is command executable like this?
      return;
    }else{
      this._err("Missing argument");
    }
  }
  if(this.pointer.redirect){//Redirect term
    var redirect = this.pointer.redirect[0];
    this.lastCommand = redirect;
    if(this.pointer.redirect_replace){
      this.outputReplaceLastTerm(redirect);
    }
    if(redirect === 'root'){
      this.pointer = cp.commands;
    }else{
      this.pointer = cp.commands.children[redirect];
    }
  }
  var keys = Object.keys(this.pointer.children);
  if(this.pointer.type === 'root'){ //If at root command
    var peek = this.iter.peek();
    var cc = this.pointer.children[peek];
    if(cc){
      this.iter.next();
      this.addToOutput(peek);
      this.lastCommand = peek;
      this.pointer = cc;
      this.parseNode();
    }else{
      this._err("Invalid Command: " + peek);
    }
  }else if(this.pointer.children && keys.length === 1){//if only one child
    var key = keys[0];
    var child = this.pointer.children[key];
    if(child.type === 'argument'){
      this.parseSingle(child, key);
      this.pointer = child;
      this.parseNode();
    }else{
      
    }
  }else if(this.pointer.children && keys.length > 1){//if more than one child;
    var peek = this.iter.peek();
    var c1 = this.pointer.children[keys[0]]; //First child
    if(c1.type === 'literal'){
      if(this.lastCommand === 'execute' && peek === 'asat'){
        this._execAsAt();
        this.parseNode();
        return;
      }
      var cc = this.pointer.children[peek];
      if(cc){
        this.iter.next();
        this.addToOutput(peek);
        this.pointer = cc;
        this.parseNode();
        return;
      }else{
        this._err("Invalid command argument: " + peek + " does not exist");
      }
    }
    var s = this.iter.pos;
    var p = this.pointer;
    var out = this.output;
    var success = false;
    for(var key of keys){
      var child = this.pointer.children[key];
      try {
        if(child.type === 'literal'){
          if(key === this.iter.peek()){
            this.addToOutput(this.iter.next());
            this.pointer = child;
            this.parseNode();
          }else{
            this._err("Invalid argument");
          }
        }else{
          this.parseSingle(child, key);
          this.pointer = child;
          this.parseNode();
        }
      }catch (e) {
        this.output = out;
        this.iter.pos = s;
        this.iter.done = false;
        this.pointer = p;
        continue;
      }
      success = true;
      break;
    }
    if(!success){
      this._err("Invalid argument");
    }
  }else if(!this.iter.done){
    this._err("Too many arguments");
  }
}
CommandParser.prototype.parseSingle = function(arg, key){
  if(arg.type === 'literal'){
    if(key === this.iter.peek()){
      this.iter.next();
    }else{
      throw new Error("Invalid argument: " + this.iter.next() + ", expected " + key);
    }
  }else{
    var type = arg.parser;
    if(!this.useParser(type, arg)){
      //TODO
      return false;
    }
  }
  
}



module.exports = CommandParser;
/*
var cmd = 'scoreboard players operation @s tcc.old_xp = tcc.current_xp';
var pr = new CommandParser(cmd);
pr.parse();//*/