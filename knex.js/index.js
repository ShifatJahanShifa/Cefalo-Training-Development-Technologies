const express=require('express')
const apiRouter=require('./routes/route.js')
const PORT=4000
const app=express()


app.use(express.json())
app.use(apiRouter)

app.listen(PORT,()=>{
    console.log(`connected to server`)
})