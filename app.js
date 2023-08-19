const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const path = require('path');


const adminRoutes = require('./routes/admin');     //import
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded());    

app.use('/admin',adminRoutes)
app.use(shopRoutes);
app.use(contactRoutes)

// app.use((req , res , next)=>{                           // for not exist url or page
//     res.status(404).send('<h1>Page Not Found</h1>');
// })
 app.use((req , res , next)=>{                           // for not exist url or page
    res.status(404).sendFile(path.join(__dirname,'routes','views','sucess.html'));
})
                
app.listen(3000);
