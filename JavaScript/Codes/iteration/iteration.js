// loop1: loop2: 
// for(let i=0;i<3;i++)
// {
//     console.log(i)
//     for(let j=3;j<6;j++)
//     {
//         console.log(j);
//         for(let k=6;k<9;k++)
//         {
//             console.log(k)
//             continue loop2
//         }        
//     }   
// }
// loop2:
// for(let a=9;a<12;a++)
// {
//     console.log(a)
// }  


// object entries
const obj={ foo: 1, bar: 2}
for(let [key,value] in Object.entries(obj)) 
{
    console.log(key,obj[key]);
    
}