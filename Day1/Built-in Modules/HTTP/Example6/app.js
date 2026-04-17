const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.statusCode=200;
        res.end("Home Page");
    }
    else{
        res.statusCode=404;
        res.end("Page Not Found!");
    }
});

server.listen(3000);