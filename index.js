// importing built in Node modules (HTTP & URL)
// const http = require('http');
// const url = require('url');

var express = require('express');
var server = express()

// assigning post and host name values
const port = 3000;
hostname = 'localhost'; 

server.use(require("./storeindex"))

// create the server
// const server = http.createServer((req, res,) => {
//     const urlobj = url.parse(req.url, true);
//     const jersey = urlobj.jersey;
//     console.log (jersey);
// });

// make the server listen to request at a given port
    server.listen(port, hostname, () => {
    console.log('the server is running at', `${hostname}:${port}`)
})