var fs = require('fs');
var CommandParser = require('./command_parser');
var logger = require('./logs');
var path = require('path');
const util = require('util');
const parseFilePromise = util.promisify(parseFile);

function parseFile(file, callback){
  fs.readFile(file, 'utf8', (err, contents) => {
    if(err){
      callback(err, null);
      return;
    }
    try {
      var str = contents.trim().replace(/\r\n/g, "\n");
      var lines = str.split("\n");
      
      var errors = [];
      for(let i = 0; i < lines.length; i++){
        let line = lines[i];
        line = line.trim();
        if(line.startsWith("#"))continue;
        try {
          logger.debug("Checking Line " + (i + 1));
           var parser = new CommandParser(line);
           parser.parse();
        }catch(e){
          errors.push("Error in line " + (i + 1) + ": " + e.message + " File: " + file);
        }
      }
      logger.verbose("File parsed: " + file);
      if(errors.length === 0){
        logger.verbose("No Errors!")
      }else{
        for(let er of errors){
          logger.error(er);
        }
      }
      callback(null, {file: file, errors});
    } catch (e) {
      callback(e, null);
    }
  });
  
}

function parseCommand(cmd){
  cmd = cmd.trim();
  var error;
  if(cmd.startsWith("#"))return;
  try {
     var parser = new CommandParser(cmd);
     parser.parse();
  }catch(e){
    error = (e.message);
  }
  logger.verbose("Command parsed: " + cmd);
  if(!error){
    logger.verbose("No Errors!")
  }else{
    logger.error(error);
  }
  return error;
}

// Loop through all the files in the temp directory

function parseDirectory(directory, callback){
  var directory = path.normalize(directory);
  var walk = function(dir, done, filter) {
    var results = [];
    fs.readdir(dir, function(err, list) {
      if (err) return done(err);
      var pending = list.length;
      if (!pending) return done(null, results);
      list.forEach(function(file) {
        file = path.resolve(dir, file);
        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            walk(file, function(err, res) {
              results = results.concat(res);
              if (!--pending) done(null, results);
            });
          } else {
            if(path.extname(file) === ".mcfunction"){
              results.push(file);
            }
            if (!--pending) done(null, results);
          }
        });
      });
    });
  };
  walk(directory, function(err, results) {
    if (err) throw err;
    logger.info("Start checking files...");
    var errors = [];
    var promises = [];
    for(let i = 0; i < results.length; i++){
      let file = results[i];
      logger.info("Checking file " + file);
      promises.push(parseFilePromise(file));
    }
    Promise.all(promises)
    .then(data => {
    callback(null, data);
    }).catch(er => {
      callback(er, null);
    });
      /*var file_errors = parseFile(file);
      if(file_errors && file_errors.length !== 0){
        errors.push({file: file, errors: file_errors});
      }
    callback(errors);*/
  });
}

exports.parseDirectory = parseDirectory;
exports.parseFile = parseFile;
exports.parseCommand = parseCommand;
