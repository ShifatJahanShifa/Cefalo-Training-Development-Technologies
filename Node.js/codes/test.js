// const process=require('process')
// console.log(process.cwd());
// console.log(__dirname);

console.log('hello\n');
console.log('world');

const process=require('process')
process.stdout.write('hello')
process.stdout.write('world')

// npx nodemon  --watch --watch-path=. .\dir.js --ignore bb.txt
//  node  --watch --watch-path=. .\dir.js --ignore bb.txt  
