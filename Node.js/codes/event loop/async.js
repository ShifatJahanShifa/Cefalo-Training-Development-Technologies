const fs=require('fs')
console.log('w');
fs.readFile('an.txt',()=>{
    console.log(3);
})
console.log(2);

