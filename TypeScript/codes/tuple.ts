type myTuple=[string,number] 

const mytuple: myTuple=['tuple',1]

console.log(mytuple[0])
console.log(mytuple[1])
mytuple.push(8)
console.log(mytuple)

let myarray= [1,3,'s',4]
myarray.push(3)
console.log(myarray.length)

let array: (number|string)[]=['s',1]
array.push('d')
array.push('d')
array.push(9)
console.log(array);
