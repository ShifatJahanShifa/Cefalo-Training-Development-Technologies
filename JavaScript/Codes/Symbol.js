// let sym1=Symbol('shifa');
// let sym2=Symbol('shifa');
// console.log(sym1===sym2);


const k1=Symbol()
const k2=Symbol()

obj={}
obj[k1]="shifat jahan"
obj[k2]="shifa"
obj['name']='shifa'
obj['age']=22

// console.log(obj[k1]);
// console.log(obj[k2]);

for (const key of obj) {
    console.log(key)
}


