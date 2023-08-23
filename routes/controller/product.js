const path =require('path')
const Product = require('../models/product')

exports.getAddproduct = (req , res , next)=>{
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="count"><button button type="submit">Add</button></form>')
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}


exports.postAddproduct = (req , res , next)=>{ 
    const product = new Product(req.body.title)      // take title as adproduct html name
    console.log(product);               
    res.redirect('/'); 
}

exports.getproduct = (req , res , next)=>{
    Product.fetchAll((products)=>{

    })
}