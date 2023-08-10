const http = require('http');  // path or module

// function reListner(req,res){
// }
// http.createServer(reListner);   // take request listner 
// or--------------------------
// http.createServer(function(res,req){})





// or-------------------------  request
// const server = http.createServer((res,req)=>{
//     console.log("Aryan",req);
//     // process.exit()                              // to stop web page  noone can acess now
// });
// server.listen(4000);

// ------------------------------------ response
// const server = http.createServer((req,res)=>{
//     console.log(req.url , req.method ,req.headers);
//     // process.exit()                              // to stop web page  noone can acess now

//     res.setHeader('Content-Type','text/html');
//     res.write('<html>')    // write html page
//     res.write('<head><title>My First Page</title></head>')
//     res.write('<body><h1>Hello</h1></body>');
//     res.write('</html>')
//     res.end()              //response endes 
// });
// server.listen(3000);










const server = http.createServer((req,res)=>{
    console.log(req.url , req.method ,req.headers);
    // process.exit()                              // to stop web page  noone can acess now
    if(req.url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')    // write html page
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>')
        res.end()              //response endes 
    }
    if(req.url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')    // write html page
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>')
        res.end()              //response endes 
    }
    if(req.url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')    // write html page
        // res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to my Node Project</h1></body>');
        res.write('</html>')
        res.end()              //response endes 
    }
});
server.listen(3000);