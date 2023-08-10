const http = require('http'); 
const fs =require('fs');   // file system

const server = http.createServer((req,res)=>{
    // console.log(req.url , req.method ,req.headers);
    const url =req.url 
    const method = req.method
    if(url==='/'){                          // url nothing

        fs.readFile("message.txt" ,{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            console.log("DATA FROM FILE " + data);
            res.write('<html>')    
            res.write('<head><title>ENTER MESSAGE</title></head>')
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
            res.write('</html>');
            return res.end();
        });
        
    }else if(url==='/message' && method==='POST'){         //read from file save in file
        const body =[];
        req.on('data', (chunk)=>{        //get user value
            console.log(chunk);
            body.push(chunk)
        });

        return req.on('end',()=>{               // write it in string and store
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedbody>>>>",parsedBody);
            const message = parsedBody.split('=')[1];     //['message','my name is aryan']

            fs.writeFileSync('message.text',message,(err)=>{  // create file and write DUMMY in it  by default dummy 
                if(err){
                    console.log(err);
                }
                // fs.writeFile('message.text','DUMMY')
                // res.writeHead(302 ,{})                    // write txt msg   or
                res.statusCode=302;
                res.setHeader('Location','/');               // '/ same location
                return res.end();
            });     
        });   
    }
    else{

    // after clicking send it navigate page url= /message and name message   
    res.setHeader('Content-Type','text/html');
    res.write('<html>')    // write html page
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>NAVIGATED</h1></body>');
    res.write('</html>')
    res.end() 
    }
});
server.listen(3000);