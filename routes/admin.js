const express = require('express');
const router = express.Router();
// const path = require('path');

const productController = require('../routes/controller/product')

//admin/app-product => GET
router.get('/add-product',productController.getAddproduct)

//admin/app-product => POST
router.post('/add-product',productController.postAddproduct)


module.exports = router