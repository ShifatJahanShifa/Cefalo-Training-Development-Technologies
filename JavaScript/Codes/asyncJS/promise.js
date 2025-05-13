// follow up function: showOrderDetails, updateWallet

const cart=['shoe','pajama','bag']

// const promise=createOrder(cart)  // return orderId

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId;
})
// .catch(function(err){  // when failure occurs
//     console.log(err.message);
    
// })
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    
})
.catch(function(err){  // when failure occurs
    console.log(err.message);
    
})

/// producer part 
// that will return a promise
function createOrder(cart)
{
    // function, then inside it two function defined by js, resolve and reject
    const pr=new Promise(function(resolve, reject){
        // logic of the function
        // validateCart
        // orderId
        if(!validateCart(cart))
        {
            const err=new Error('cart is not valid')
            reject(err)
        }
        const orderId='123'
        if(orderId) 
        {
            setTimeout(function(){
                resolve(orderId)},5000)
        }
    })

    return pr;
}

function proceedToPayment(orderId)
{
    /// logic
    return new Promise(function(resolve,reject){
        resolve('payment successful')
    })
}

function validateCart(cart) 
{
    return false;
}

console.log('you can browse our other items, too!');
// const input=prompt('what do you want to browse?', 'bottle')
