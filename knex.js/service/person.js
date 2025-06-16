const obj=require('../dao/person.js')

class PersonService{       // responsible for delegating task
    createPerson(personObj) {
        //
        const { fn,ln,email }=personObj
        // console.log('person..',fn,ln,e)
        return obj.createPerson(fn,ln,email)
    }
}

let objs = new PersonService();
module.exports=objs;