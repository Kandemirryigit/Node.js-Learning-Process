// Import built-in HTTP module (used to create servers)
const http=require("http");

// Create a server
const server=http.createServer((req,res)=> {

    // Set response header (tells browser we are sending text)
    res.setHeader("Content-Type","text/plain");

    // Check the URL of the request
    if(req.url==="/"){
        res.end("Home Page");
    }
    else if(req.url==="/about"){
        res.end("About Page");
    }
    else{
        res.end("404 Page Not Found");
    }

});


// Start server on port 3000
server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});



// What you learned
// http module creates servers
// req = request (what user asks)
// res = response (what server sends back)
// req.url = route system
// Node.js can act like a web server


// Important idea
// This is how backend systems work:
// Browser sends request
// Server processes it
// Server sends response
