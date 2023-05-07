const  http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const htmlFile = fs.readFileSync('./index.html');
        res.write(htmlFile);
        res.end();
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html');
        const htmlFile = fs.readFileSync('./about.html');
        res.write(htmlFile);
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})