const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {
    fs.createReadStream(file).pipe(res)
}).listen(port)