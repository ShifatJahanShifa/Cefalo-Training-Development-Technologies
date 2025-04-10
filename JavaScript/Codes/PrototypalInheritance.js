const obj1={
    name: "shifa",
    roll: 1301,
    getActivity: function(){
        console.log("i am a trainee");
    }
}

const obj2={
    name: "jahan"
}

// never do this in real time
// obj2.__proto__=obj1; // setting the prototype of obj2 to obj1
// obj2.getActivity(); // i am a trainee

console.log(obj2.__proto__); 

Function.prototype.mybind=function(){
    console.log("hello shifs")
}

function fun2(){

}

fun2.mybind()