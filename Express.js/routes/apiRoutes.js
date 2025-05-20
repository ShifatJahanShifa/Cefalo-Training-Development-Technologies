// i need to do alot more work

import express from 'express'
import { productController } from '../controllers/productsController.js'
import { serviceController } from '../controllers/servicesController.js'

export const apiRouter=express.Router()
apiRouter.get('/products',productController)

apiRouter.get('/services',serviceController)