const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    req.pipe(map((data) => { 
        return data.toString().toUpperCase();
    })).pipe(res) 
}).listen(port)