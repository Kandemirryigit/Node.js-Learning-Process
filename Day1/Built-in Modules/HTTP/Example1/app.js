// Create a basic server


const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hello World!");
    res.end();
});

server.listen(3000);



// What’s happening?
// createServer() → creates server
// (req, res) → request & response objects
// res.write() → send data
// res.end() → finish response
// listen(3000) → run server on port 3000