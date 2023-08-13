const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url==='/'){  
                                // url nothing
        res.write('<html>');    
        res.write('<head><title>ENTER MESSAGE</title></head>');
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>`);
        res.write('</html>');
        return res.end();
        }

    if(url==='/message' && method==='POST'){  
        const body =[];
        req.on('data', (chunk)=>{               
            console.log(chunk);
            body.push(chunk)
        });

        return req.on('end',()=>{                        
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedbody>>>>",parsedBody);
            const message = parsedBody.split('=')[1];  
            fs.writeFile('message.text',message,(err)=>{ 
                res.statusCode=302;
                res.setHeader('Location','/');               
                return res.end();
            }) ;
        });        
    }else{ 
    res.setHeader('Content-Type','text/html');
    res.write('<html>')    // write html page
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>NAVIGATED</h1></body>');
    res.write('</html>')
    res.end() ;
}}


// exporting 
module.exports = requestHandler;

//or
// module.exports = {
//     handler : requestHandler,
//     somText : " Hi "
// };

// //or
// module.exports.handler = requestHandler;

// //or
// export.handler = requestHandler;