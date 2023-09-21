const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false

  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null , title, imageUrl, description, price);
  product
  .save()
  .then(()=>{
    res.redirect('/');
  })
  .catch(err=>{console.log(err);});
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId = req.params.productId
  Product.findById(prodId , product=>{
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product', {                //to get edit page
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing : true,
      product : product
    });
  })
};

exports.postEditProduct = (req , res , next) =>{
  //fetch info for product
  const prodId = res.body.productId;            // jo edit form fill kiya aagaya data
  //create new product instance & populate with info
  const updatedTitle = res.body.title ;                // usdata ko store karengye ab
  const updatedPrice = res.body.price ;
  const updatedImageUrl = res.body.imageUrl ;
  const updatedDesc = res.body.description ;
  // then call save

  const updatedProduct = new Product(
    prodId ,
    updatedTitle ,
    updatedImageUrl ,
    updatedDesc ,
    updatedPrice
    );
    updatedProduct.save()
    res.redirect('/admin/products')
  
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res ,next)=>{
  //extract prodid from body
  const prodId = req.body.productId;
}