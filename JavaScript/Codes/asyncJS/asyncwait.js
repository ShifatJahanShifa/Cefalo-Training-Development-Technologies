// by using async keyword, we create an async function. 

// const p=new Promise(function(resolve, reject){
//     resolve('promise resolved')
// })

// // async function will always return a promise.
// async function getData()
// {
//     return p
// }

// const data=getData()

// // console.log(data);

// data.then((res)=> console.log(res))

// raw
// const p=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('promise resolved')
//     }, 10000)
// })

// // // now
// async function handlePromise()
// {
//     const pr=await p;
//     console.log(pr)
//     console.log('shifa');
    
// }

// handlePromise() 

// prev 
// function getData()
// {
//     p.then((res)=> console.log(res))
//     console.log('am i waiting');
    
// }

// getData()

// console.log('shifa11');


// fethc api 

API_URL='https://api.github.com/users/ShifatJahanShifa' 

async function handlePromise() {
    try{
        const data=await fetch(API_URL)    // response 
        const jsonvalue=await data.json()
        console.log(jsonvalue);
    }
    catch(err) 
    {
        console.log(err);
        
    }
    
}

handlePromise()