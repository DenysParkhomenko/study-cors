const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
   res.writeHead(200, {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:5500',
       'Access-Control-Allow-Credentials': 'true'
    });

    res.end(JSON.stringify({
        'status': 'OK',
        'sentCookie': req.headers.cookie
    }));
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
