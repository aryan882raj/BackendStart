const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// const path = require('path');


const adminRoutes = require('./routes/admin');     //import
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded());    

app.use('/admin',adminRoutes)
app.use(shopRoutes);
app.use(contactRoutes)

const errorController = require('./routes/controller/error')

// app.use((req , res , next)=>{                           // for not exist url or page
//     res.status(404).send('<h1>Page Not Found</h1>');
// })
 app.use(errorController.getError)
                
app.listen(3000);