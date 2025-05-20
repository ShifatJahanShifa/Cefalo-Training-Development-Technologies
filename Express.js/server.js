import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'
import cors from 'cors'
const PORT=8001
const app=express()

app.use(cors())   // will be applied to all routes

app.listen(PORT,()=>{
    console.log('connected to the server');
})

// const productController=(req,res)=>{
//     res.json({data: 'products'})
// }
// const serviceController=(req,res)=>{
//     res.json({data: 'services'})
// }


// apiRouter.get('/products',productController)

// apiRouter.get('/services',serviceController)

app.use('/api',apiRouter)

app.use((req,res)=>{
    res.status(404).json({msg: 'error'})
})