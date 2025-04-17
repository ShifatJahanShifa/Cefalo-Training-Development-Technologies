"use strict" 

let map=new Map()
map.set('key',100)
// map.set(window,200)
map.set(1301,'shifa')

// console.log(map.get(window));
map.set(4,90)
console.log(map.size);
// map.delete(4)
console.log(map.size);
// map.clear()
console.log(map.size);
console.log(map.keys());
console.log(map.values());

// loop 
for (const e of map) {
    console.log(e);
    
}