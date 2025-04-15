// let arrayLength=42
// const arr1=new Array(arrayLength)

// console.log(arr1.length)

// for (let index = 0; index < arr1.length; index++) {
//     console.log(arr1[index]);
// }

// const arr2=new Array(12,13)

// console.log(arr2.length);

// let arr3=[]
// arr3.length=4
// console.log(arr3.length)

// let arr=Array('as');
// console.log(arr.length);

// let b=[]
// b[0]='as'
// b[1]='qw'
// b[2]='zx'

// for(let e in b)
// {
//     console.log(e, b[e])
// }

// const d=[]
// d[3.4]='fg'
// console.log(d.length)
// console.log(Object.hasOwn(d,3.4))

// customized sort function for number data type. 

// let arr=[2,11,3,4,5]
// arr.sort(comp)
// console.log(arr)

// function comp(a,b)
// {
//     a=Number(a)
//     b=Number(b)
//     if(a<b) return -1;
//     else if(a>b) return 1;
//     else return 0;
// }

// map()
// const f=[1,2,2,1,4,2]
// // console.log(f.indexOf(2,2))

// const g=f.flatMap((e)=> [e.toString(),e])
// console.log(g);

// filter()
// const h=[2,'d',4,'k']
// const k=h.filter((e)=> typeof e==="number") 
// console.log(k);

// // custom function
// function check(e)
// {
//     return typeof e==="number";
// } 
// // console.log(h.every((e)=> typeof e==="number"));
// // console.log(h.some((e)=> typeof e==="number"));

// console.log(h.every(check));
// console.log(h.some((e)=> typeof e==="number"));


// reduce 
// let m=[1,2,3]
// const res=m.reduce((sum,curr)=>
//     {
//         console.log(curr, sum)   
//         return sum+curr
//     },0)

//     console.log(res);
    

// let m=[]
// const res=m.reduce((sum,curr)=>
//     {
//         console.log(curr, sum)   
//         return sum+curr
//     },0)

// console.log(res);  


// let p=[]
// console.log(p.length);
// p.length=9;
// console.log(p.length);

// sparse 
// let t=[1,2,3,4,5]
// console.log(t);

// delete t[3]
// delete t[2]
// console.log(t);

let s=[1,2,,,4]

// console.log(s[3]);
// for (const e of s) {
//     console.log(e);
    
// }

// for (const key in s) {
//    //if (Object.prototype.hasOwnPropert
//    // 
//    // logonst element = object[key];
//         console.log(s[key]);
        
//     //}//
// }

// const another=[...s]
// console.log(another);

// array destructure

let u=[1,2,3,4]
const [ first, second, third , ...rest]=u;

console.log(first,second,third);
console.log(rest);

