const http = require('http');
const fs = require('fs');

var server = http.createServer(
    (request,response)=>{

        if (request.url === "/" && request.method === "GET") {

            fs.readFile('static/top.html','UTF-8',(error,data)=>{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data);
                response.end();
            })
        }else if (request.url === "/lib/jquery-3.6.1.js" && request.method === "GET") {

            fs.readFile('static/lib/jquery-3.6.1.js','UTF-8',(error,data)=>{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data);
                response.end();
            })
        }else if (request.url === "/top.js" && request.method === "GET") {

            fs.readFile('static/top.js','UTF-8',(error,data)=>{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data);
                response.end();
            })
        }
       
    }
);
server.listen(3000);
