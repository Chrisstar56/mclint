
# mclint

Syntax checker for mcfunction files

[![npm version](https://badge.fury.io/js/mclint.svg)](https://www.npmjs.com/package/mclint/)

The mclint package is an easy to use Syntax checker for mcfunction files. It's not perfect and not everything is supported, but it can catch most syntax errors reliably. If it still fires wrongly (should not happen), you can add `#[IGNORE]` in the line before your command and the parser will ignore it while parsing.

### Installation

    npm install mclint
In the js file:

    var mclint = require('mclint');

### Usage

The package has three methods:

    mclint.parseFile(file, callback(error, result))
   This will check the specified file for syntax errors. The result is of the following format: `{file: filepath, errors: [Array of Errors]}`
   
   
   
    mclint.parseDirectory(directory, callback(error, result))
  This will search an entire directory for *.mcfunction* and perform "parseFile" on them. files The result is an array of `{file: filepath, errors: [Array of Errors]}`
  
  
    mclint.parseCommand(command)
  This will parse a Command and return the error if there was one encountered while parsing. This function is synchronous.

### Todo list

 - [ ] Support NBT parsing
 - [ ] Provide an command line interface
 - [ ] Good parsing for scores and advancement selector
 - [ ] Syntax Highlighting
