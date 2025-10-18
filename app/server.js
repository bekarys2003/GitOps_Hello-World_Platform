const http = require('http');
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello from GitOps!';
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`${message} \nHost: ${req.headers.host}\n`);
}).listen(port, () => console.log(`Listening on ${port}`));