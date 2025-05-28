const db=require('../db/db.js')

class PersonDAO{       // responsible for delegating task
    async createPerson(fn, ln, e) {
        // db insertion
        const [id]=await db('person').insert({
            fn: fn,
            ln: ln,
            email: e
        })
        .returning('id')

        return id
    }
}

let obj = new PersonDAO();
module.exports= obj;