const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  }
  if (req.url === '/about') {
    res.end("Welcome to about Page");
  }
  res.end(`<h1>Oops!!</h1> 
   <p>404 Error! Page Not Found</p>
   <a href="/">Go Back Home</a>`);
});

server.listen(5000);
