// Simple API with multiple routes


const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/api/users"){

        const users=[
            {id:1,name:"Yigit"},
            {id:2,name:"Alex"}
        ];

        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(users));
    }
    else if(req.url==="/api/products"){

        const products=[
            {id:1,name:"Phone"},
            {id:2,name:"Laptop"}
        ];

        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(products));
    }
    else{
        res.statusCode=404;
        res.end("Not Found");
    }


});


server.listen(3000);