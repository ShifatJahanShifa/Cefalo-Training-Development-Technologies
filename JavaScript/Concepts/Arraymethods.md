# Array Methods

1. concat()
```JS
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
``` 

2. join()
3. push()
4. pop()
5. shift()
6. unshift()
7. slice()
8. at()
9. splice()
10. reverse()
11. sort() 
12. indexOf()
13. lastIndexOf()
14. forEach() / callback function. iterative cause iterate enite array in some fashion. 
15. map()
16. flatMap()
----------------- from here all the methods below deal with true
17. filter()
18. find()
19. findIndex()
20. findLastIndex()
21. every()
22. some()
23. reduce(): 
syntax- array.reduce(callback, initialValue);
24. reduceRight()

#### In reduce method: 

with initial value:

behavior : 
1. accumulator value = 0 or what i want. 
2. executes each element   

performance:   

1. no need to check for the initial value of the accumulator. That's why the loop starts immecdiately. 
2. it is faster approach. it avoids the need to consider the edge case

without initial value:

behavior : 
1. accumulator value = the first element of teh array 
2. execution starts from the second element  

performance:

1. need to check for the initial value of the accumulator. 
2. for empty array, it throws `typerror`.


### More about Array
1. sparse array: arrays contain `empty slots` which are not same as the slot filled with value `undefined`. 
sparse array can be created in the following way:    
a. Array(5)
b. b=[1,2,,,4] 
c. c=[1,2], c[4]=4. then c=[1,2,,4]
d. d=[1,2]. d.length=5
e. by deleteing any middle element. `delete` 

operations where empty slots behave as if they are filled with `undefined`. 

1. for...of iteration
2. spreading operator
3. accessing 

operations where empty slots are skipped OR EMPTY:( in array iteration methods)
1. map
2. foreach
3. filter
4. some
5. object enumeration
6. for...in iteration 

## *** we can use array in destructuring way

const [first, second, third]=arr;