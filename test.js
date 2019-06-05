var mclint = require('./parse');
console.log("Command");
//console.log(mclint.parseCommand("execute as @e"));
console.log("directory");
//mclint.parseDirectory("./test/Tinkery/", function(err, res){console.log(res)});
console.log("file");
mclint.parseFile("C:/Users/bboet/Desktop/Programmieren/NodeJS/mclintt/Tinkery/data/tinkery/functions/hello.mcfunction", function(err, res){console.log(err ,res});