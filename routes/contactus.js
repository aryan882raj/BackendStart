const express = require('express');
const router = express.Router();
const path = require('path');

const contactusController = require('../routes/controller/contactus')


router.get('/contactus',contactusController.getContactus)

router.post('/contactus',contactusController.postContactus)

module.exports = router