const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/contactus',(req , res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'contact.html'))
})

router.post('/',(req, res,next)=>{
    res.send('<h1>Hello Express</h1>')
})

module.exports = router