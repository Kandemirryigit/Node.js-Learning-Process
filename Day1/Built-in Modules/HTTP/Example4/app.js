// Read request info

const http = require("http");

const server=http.createServer((req,res)=>{
    console.log("URL:",req.url);
    console.log("Method:",req.method);

    res.end("Check Terminal");

});

server.listen(3000);