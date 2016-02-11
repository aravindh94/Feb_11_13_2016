//Arrays
var arr = new Array();
var arr1 = [];
arr1 = [1,2,3,4,'string',"string",true,45.67,null];
for(var i=0;i<arr1.length;i++){
	//console.log(arr1[i]);
}

var countries = [];
countries["India"] = "New Delhi";
countries["USA"] = "Washington D.C";
countries["UK"] = "London";

console.log(countries["USA"]);

for(var key in countries){
	console.log(key + ": " + countries[key]);
}






