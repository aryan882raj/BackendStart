const path = require('path');

const express = require('express');
const router = express.Router();

const shopController = require('../routes/controller/shop')

router.get('/',shopController.getShop)

module.exports = router;