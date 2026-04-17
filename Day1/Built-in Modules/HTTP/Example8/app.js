// Handle HTTP method (GET / POST logic)

const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.method==="GET"){
        res.end("GET request received");
    }
    else if(req.method==="POST"){
        res.end("POST request received");
    }

});

server.listen(3000);