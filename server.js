var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
	var url = request.url;
	if(url.match(/Globe/)){
		getInfo(request,response);
	}
	else if(url.match(/currenttime/)){
		getCurrentTime(request,response);
	}
	else{
		var filePath = url.substring(1);
		loadFile(filePath,response);	
	}
	
});
var getCurrentTime = function(request,response){
	var dt = new Date();
	response.end(dt.toTimeString());
}
var getInfo = function(request,response){
	var queryString = require("url").parse(request.url,true).query;
	var country = queryString.country;
	var output = {"capital":"NA in DB"};
	if(country == "India")
		output = {"capital":"New Delhi"};
	else if(country == "USA")
		output = {"capital":"Washington DC"};
	else if(country == "UK")
		output = {"capital":"London"};
	response.end(JSON.stringify(output));
};
var loadFile = function(filePath,response){
	fs.readFile(filePath,function(e,data){
		if(e)
			response.end("Error. File not found " + filePath);
		else
			response.end(data);
	});
};
server.listen(8080);
console.log("Server started and running in 8080");
