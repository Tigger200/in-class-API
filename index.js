// importing built in Node modules (HTTP & URL)
const http = require('http');
const url = require('url');

// assigning post and host name values
const port = 3000;
hostname = 'localhost'; 

// create the server
const server = http.createServer((req, res,) => {
    const urlobj = url.parse(req.url, true);
    const pathname = urlobj.pathname;
    console.log (pathname);
});

// make the server listen to request at a given port
    server.listen(port, hostname, () => {
    console.log('the server is running at', '${hostname}:${port}')
})










