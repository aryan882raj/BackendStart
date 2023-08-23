const path =require('path')

exports.getContactus = (req , res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'contact.html'))
}

exports.postContactus = (req, res,next)=>{
    res.send('<center><h1>Slot Booked Success ...</h1></center>')
}