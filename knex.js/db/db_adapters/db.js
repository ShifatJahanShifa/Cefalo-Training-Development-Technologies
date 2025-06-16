const knex=require('knex')
const knexfile=require('../config/knexfile.js')

const db=knex(knexfile.development)
module.exports=db
