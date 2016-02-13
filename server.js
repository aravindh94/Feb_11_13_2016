var http = require("http");
var server = http.createServer(function(request,response){
	response.end('Hello World');
});
server.listen(8080);
console.log("Server started and running in 8080");
