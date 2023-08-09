const http = require('http');  // path or module

// function reListner(req,res){
// }
// http.createServer(reListner);   // take request listner 
// or--------------------------
// http.createServer(function(res,req){})

// or-------------------------
const server = http.createServer((res,req)=>{
    console.log("Aryan",req);
});

server.listen(4000);


