const path =require('path')

exports.getShop = (req , res , next)=>{               
    // res.send('<h1>Hello Express</h1>')
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
}