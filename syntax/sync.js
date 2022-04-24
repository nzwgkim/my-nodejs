fs = require('fs');

console.log('a');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('c');

console.log('------------------------');


console.log('a');
fs.readFile('syntax/sample.txt', 'utf8', (err,result)=>{
    console.log(result);
});
console.log('c');
