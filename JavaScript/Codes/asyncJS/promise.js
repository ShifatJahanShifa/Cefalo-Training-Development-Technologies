const cart=['shoe','pajama','skirt']

const promise=createOrder(cart)  // orderId

promise.then(function(){
    proceedToPayment(orderId)   
})