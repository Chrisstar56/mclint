var mclint = require('./parse');
console.log("Command");
//console.log(mclint.parseCommand("execute as @e"));
console.log("directory");
//mclint.parseDirectory("C:/Users/bboet/Desktop/Programmieren/NodeJS/mclint/test/Tinkery/", function(err, res){console.log(res)});
console.log("file");
mclint.parseFile("C:/Users/bboet/Desktop/Programmieren/NodeJS/mclint/test/Tinkery/data/tinkery_data/functions//tick/jump_boost/offhand.mcfunction", function(err, res){console.log(err ,res)});