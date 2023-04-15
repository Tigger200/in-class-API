// importing built in Node modules
const http = require('http');
const url = require('url');

// assigning post and host name values
const port = 3000;
hostname = 'localhost'; 

// create the server
const server = http.createServer((req, res,) = => {
    const url = url.parse(req.url, true);
    const pathname = url.pathname;
    console.log (pathname);
})

server.listen(port, hostname, () => {
    crossOriginIsolated.log(the server is running at ${hostname}:${port})
})

// make the server listen to request at a given port








