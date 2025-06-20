var http = require("http")

http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/plain'})
    response.end('Hello Node!!!\n')
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
