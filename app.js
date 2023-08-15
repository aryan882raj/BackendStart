// const http = require('http'); 
// const routes = require('./app_route');            // import
// const server = http.createServer(routes)          // use is instead (req,res)=>{}
                                                  // or (routes.handler) // (routes.somtext)
const express = require('express');
const app = express();

app.use((req , res , next)=>{
    console.log("In the middleware");
    next();                                           // to jump nextmiddleware
})
app.use((req , res , next)=>{
    console.log("Another middleware");
    // res.send('<h1>Hello Express</h1>')
    res.send( { "name": 123 })
})
                  


app.listen(3000);
// const server = http.createServer(app)
// server.listen(3000);