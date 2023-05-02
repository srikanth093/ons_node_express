console.log("OM SAI RAM");
const http = require('http');
const {readFileSync} = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === "/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write('<h1>OSR Home Page ONS</h1>');
        res.end();
    }else if(url === "/nav"){
        res.writeHead(200,{"content-type":"text/html"});
        const data = readFileSync("./navbar-app/index.html");
        res.write(data);
        res.end();
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h1>ONS Page Not Found ONN</h1>");
        res.end();
    }
})

server.listen(5000);