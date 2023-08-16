const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded());    

app.use('/add-product',(req , res , next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="count"><button button type="submit">Add</button></form>')
})

app.use('/product',(req , res , next)=>{ //app.post    // this also help to return post get also   app.use or app.get
    console.log(req.body);               // beacaeuse of app.use(bodyParser.urlencoded());  we get output
    res.redirect('/'); 
})

app.use('/',(req , res , next)=>{               
    res.send('<h1>Hello Express</h1>')
})
                

app.listen(3000);
