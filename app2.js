var http= require('http');
var port= 3000;

var server=http.createServer (function(request,response){
console.log('Incoming Request!');
response.write('Hello');
response.end();
});

server.listen(`${port}`);