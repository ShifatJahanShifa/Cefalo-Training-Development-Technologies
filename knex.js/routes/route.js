const express=require('express')
const objp=require('../controllers/person.js')
module.exports=apiRouter=express.Router()

apiRouter.post('/person',objp.createPerson)
