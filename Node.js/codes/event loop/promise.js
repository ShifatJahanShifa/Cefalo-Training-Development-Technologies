Promise.resolve().then(()=>{
    console.log('resolved');
    
})

process.nextTick(()=>{
    console.log(2);
    
})

