// 5 cases
// read, create, update, delete, rename using callbacks and promises

const fs=require('fs')
const fsPromises=require('fs').promises


//---------------------- create a file
// fs.writeFile('b.txt','hello world',(err)=>{
//     if(err) throw err;
//     console.log('FILE CREATED');  
//     console.log(err);
// })

// async function createFile(msg)
// {
//     await fsPromises.writeFile('c.txt',msg)
//     console.log('file is created');
// }

// const msg='hello, i am here'
// createFile(msg)


//--------------------------- read file

// fs.readFile('b.txt','utf-8',(err,data)=>{
    
//     try 
//     {
//         if(err) 
//         {
//             throw new Error('error occured')
//         }
//         else 
//         {
//             console.log(data);
//         }
//     }
//     catch(error) 
//     {
//         console.log(error);
        
//     }
// })

// async function readfile(fileName)
// {
//     const data=await fsPromises.readFile(fileName,'utf-8')
//     console.log(data);
    
// }

// const fileName='c.txt'
// readfile(fileName)


//-------------------------------- update a file

// fs.appendFile('b.txt','\nappended content',(err)=>{
//     if(err) throw err 
//     console.log('content appended');
// })


// async function appendfile(filename,content) {
//     await fsPromises.appendFile(filename,content)
//     console.log('appended');
// }

// const filename='c.txt'
// const content='i appended last'
// appendfile(filename,content)


//--------------------------- rename a file 
// fs.rename('b.txt','bb.txt',(err)=>{
//     if(err) throw err 
//     console.log('renamed')
// })


// async function renameFile(prevName,newname)
// {
//     await fsPromises.rename(prevName,newname)
//     console.log('renamed file');
// }

// const prevName='c.txt'
// const newName='cc.txt'
// renameFile(prevName,newName)  


//------------------------- delete a file 

// fs.unlink('cc.txt',(err)=>{
//     if(err) throw err;
//     console.log('deleted');
// })

// async function deleteFile(fileName){
//     try {
//         await fsPromises.unlink(fileName)
//         console.log('DELETED FILE');
//     }
//     catch(err) 
//     {
//         console.log(err.code)
//     }
// }

// // const fileName='d.txt'  
// const fileName='a.txt'
// deleteFile(fileName)
