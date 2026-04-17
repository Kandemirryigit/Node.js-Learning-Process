const http = require("http");

const server=http.createServer((req,res)=>{

    if(req.url==="/api/user"){
        const user={name:"Kandemir",role:"Student"};

        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(user));
    }
    else{
        res.end("Route not found");
    }

});

server.listen(3000);


// req → incoming request
// res → outgoing response
// routing → checking req.url
// server → listens to requests