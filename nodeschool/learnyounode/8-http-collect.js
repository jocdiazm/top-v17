const http = require('http');

const url = process.argv[2];

http.get(url,function callback (response) {
    let result = '';
    response.setEncoding('utf8');
    response.on('data',function (data){
        result +=data
    });
    response.on('end',function(){
        console.log(result.length);
        console.log(result);
    });
});
