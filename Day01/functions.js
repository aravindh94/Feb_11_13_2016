function sleep(hours){
	console.log("Learning AngularJS for " + hours + " hours");
}
function snore(hours){
	return "grrrr ggrrrrr for " + hours + " hours";
}

sleep(8);
var output = snore(2);
console.log(output);