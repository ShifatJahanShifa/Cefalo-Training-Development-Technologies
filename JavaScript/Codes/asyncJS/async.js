// sync js

// const processOrder=(customer)=>{
//     console.log('processing order for customer1');
    
//     var curTime= new Date().getTime();
//     while((curTime+3000)>= new Date().getTime()); 
//     console.log('order processed');
// }

// console.log('taking order for customer');
// processOrder('customer')
// console.log('order served');


// sync js with setTimeout function
// const processOrder=(customer)=>{
//     console.log('processing order for customer1');
    
//     var curTime= new Date().getTime();
//     setTimeout(() => {
//         console.log('order processed');
//     }, 3000);
// }

// console.log('taking order for customer');
// processOrder('customer')
// console.log('order served');  


// how to handle the code flow of async js when we don't know the exact timing?? 

// const takeOrder=(customer,callback)=>{
//     console.log(`take order for ${customer}`);    
//     callback(customer)
// }

// const processOrder=(customer,callback)=>{
//     console.log(`processing order for ${customer}`);
    
//     setTimeout(() => {
//         console.log('order processed'); 
//         callback(customer)
//     }, 3000);
// } 

// const completeOrder=(customer)=>{
//     console.log(`completed order for ${customer}`);    
// }

// takeOrder('customer1', (customer)=>{
//     processOrder(customer, (customer)=>{
//         completeOrder(customer)
//     })
// })

// console.log('hello1');
// completeOrder('customer')
// console.log('hello32');
// console.log('hello3');
// console.log('hello32');
// console.log('hello3');
// for (let index = 0; index < 100; index++) {
//     let a=9, b=2;
//     a=a*b
//     b=b/a
// }
// console.log('hello32');
// setTimeout(()=>{
//     console.log('inside ');
    
// },1)
// console.log('hello3');
// console.log('hello32');
// console.log('hello3');


// now nested callback creates callback hell. to solve this, let's use promise. 
// const hasMeeting=false;

// const promise=new Promise((resolve, reject)=>{
//     // do sth  
//     if(!hasMeeting){
//         const meetingDetails={
//             name: 'technical meeting',
//             location: 'gm',
//             time: '10:00am'
//         }
//         // promise rakhte parle rakhbo
//         resolve(meetingDetails)
//     }
//     else 
//     {
//         // promise na rakhte parle rakhbo na
//         reject(new Error('meeting already scheduled'))
//     }
// })

// promise 
//     .then((res)=>{
//         console.log(JSON.stringify(res));
        
//     })
//     .catch((err)=>{
//         console.log(err.message);
        
//     })

// now i want create a promise chain. 
const hasMeeting=false;

const promise=new Promise((resolve, reject)=>{
    // do sth  
    if(!hasMeeting){
        const meetingDetails={
            name: 'technical meeting',
            location: 'gm',
            time: '10:00am'
        }
        // promise rakhte parle rakhbo
        resolve(meetingDetails)
    }
    else 
    {
        // promise na rakhte parle rakhbo na
        reject(new Error('meeting already scheduled'))
    }
})

// const addToCalender=(meetingDetails)=>{
//     return new Promise((resolve,reject)=>{
//         const calender=`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calender)
//     })
// }

// cleaning
const addToCalender=(meetingDetails)=>{
   
    const calender=`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calender)

}

promise 
    .then(addToCalender)
    .then((res)=>{
        console.log(JSON.stringify(res));
        
    })
    .catch((err)=>{
        console.log(err.message);
        
    }) 