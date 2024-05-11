const { log } = require('console');
const { pseudoRandomBytes } = require('crypto');
const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

//create server
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("hello ice tea")
    }else if (req.url === '/ice-tea') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Thanks for ordering ice tea")
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 not found")
    }
})

// for listen server
server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})