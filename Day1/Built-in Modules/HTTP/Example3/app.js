// Send JSON (API style)

const http = require("http");

const server=http.createServer((req,res)=>{

    const user={
        name:"Yigit",
        age:20
    };

    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(user));

});

server.listen(3000);
