//Higher order function
function doSomething(sthg){
	sthg();
}
function doSomethingElse(){
	return function(){ console.log("ahahahahahhahahaah"); };
}

function work(){
	console.log("Working");
}
var sleep = function(){
	console.log("Sleeping");
}
doSomething(work); //doSomething(work());
doSomething(sleep);
doSomething(function(){
	console.log("Scratching my head");
});





var eat = function(){
	console.log("Eating");
};
eat();