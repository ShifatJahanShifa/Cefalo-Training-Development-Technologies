// const name={
//     firstname: 'Shifat jahan',
//     lastname: 'shifa',
//     fullname: function(){
//         console.log(this.firstname+' '+this.lastname)
//     }
// }

const name={
    firstname: 'Shifat jahan',
    lastname: 'shifa'
}

let fullname= function(f,s)
            {
                console.log(this.firstname+' '+this.lastname+" "+f+' '+s)
            }
    

fullname.call(name)

const name2={
    firstname: 'Shifa',
    lastname: 'shifa'
}

// function borrowing from other object
fullname.call(name2,1,2)

// in apply method, we pass value in array

fullname.apply(name2, [1,2])  

// bind creates a copy of the method and return it. does not invoke immediately. we can call it later.

let func=fullname.bind(name2,1,2)
func()