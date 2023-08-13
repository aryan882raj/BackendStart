const http = require('http'); 
const routes = require('./app_route');            // import

const server = http.createServer(routes)          // use is instead (req,res)=>{}
                                                  // or (routes.handler) // (routes.somtext)
server.listen(3000);