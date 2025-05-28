const objs=require('../service/person.js')

class PersonController{       // responsible for delegating task
    async createPerson(req,res) {
        //
        try 
        {
            const id=await objs.createPerson(req.body)
            res.status(201).json({msg: 'user created'})
        }
        catch(error)
        {
            console.error(error)
        }
    }
}

let objp = new PersonController();
module.exports= objp;  // can i do it in the previous line