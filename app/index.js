const http = require("http");

http.createServer((req, res) => {
  res.write("Hello Abhishek — GH200 Real Project 🚀");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");
