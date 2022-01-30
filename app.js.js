var http= require('http');

var server=http.createServer(function(request,response){
console.log('Incoming Request!');
response.write('Hello');
response.end();
});

server.listen(3000);