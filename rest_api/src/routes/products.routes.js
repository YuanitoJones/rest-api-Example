import { Router } from "express"
const router = Router();

import * as productcontroller from '../controllers/products.controller'
import {authJwt}from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productcontroller.createProduct)

router.get('/', productcontroller.getProducts)

router.get('/:productId', productcontroller.getProductById)

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productcontroller.updateProductById)

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productcontroller.deleteProductById)
export default router;