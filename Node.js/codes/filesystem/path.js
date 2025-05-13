const path=require('path')
const filePath='C:\\Users\\cefalo\\Desktop\\Cefalo-Training-Development-Technologies\\Node.js\\codes\\filesystem\\path.js' 

// getting information from a file path
// console.log('path ',path.dirname(filePath))
// console.log(path.basename(filePath));    // notes.txt
// console.log(path.extname(filePath));     // .txt
// console.log(path.basename(filePath, path.extname(filePath))); // notes when i provide extname, then it removes the extension from the base file name.


// // join a path's segment
// const name='shifa'
// const pathName=path.join('users',name,'note.txt')

// console.log(pathName);

// // resolving name
// console.log(path.resolve('/user','joe.txt'));

// console.log(path.resolve('b.txt'));  

// console.log(path.normalize('/users/joe/..//test.txt'));  

console.log(path.normalize('/a/b/../c/./d.txt'));



