var fs = require('fs');
var CommandParser = require('./command_parser');
var logger = require('./logs');
var path = require('path');

class ParseFile {
  
  constructor (file) {
    this.file = file
    this.loadFile(file);
  }
  
  loadFile (file) {
    var contents = fs.readFileSync(file, 'utf8');
    // and normalise line endings
    var str = contents.trim().replace(/\r\n/g, "\n");
    this.lines = str.split("\n");
  }
  
  parse() {
    var errors = [];
    for(let i = 0; i < this.lines.length; i++){
      let line = this.lines[i];
      line = line.trim();
      if(line.startsWith("#"))continue;
      try {
        logger.debug("Checking Line " + (i + 1));
         var parser = new CommandParser(line);
         parser.parse();
      }catch(e){
        errors.push("Error in line " + (i + 1) + ": " + e.message + " File: " + this.file);
      }
    }
    logger.verbose("File parsed: " + this.file);
    if(errors.length === 0){
      logger.verbose("No Errors!")
    }else{
      for(let er of errors){
        logger.error(er);
      }
    }
  }
}

// Loop through all the files in the temp directory


function parseDirectory(directory){
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
    //logger.info(results);
    logger.info("Start checking files...");
    for(let i = 0; i < results.length; i++){
      let file = results[i];
      logger.info("Checking file " + file);
      let parser = new ParseFile(file);
      parser.parse();
    }
  });
}

parseDirectory("./test/Tinkery/");
//parseDirectory("C:/Users/bboet/AppData/Roaming/.minecraft/saves/TestWorld114/datapacks/terminal");
//new ParseFile("C:/Users/bboet/AppData/Roaming/.minecraft/saves/TestWorld114/datapacks/terminal/data/terminal/functions/test/run.mcfunction").parse();
//new ParseFile("C:/Users/bboet/Desktop/Programmieren/NodeJS/mclint/test/TCC/data/tcc/functions/charms/timbering/stripped_jungle_log/loop.mcfunction").parse();