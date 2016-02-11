function $$(item){
	console.log(item);
}
$$(_());

function _(){
	console.log("WTH");
}
_();

function $(){
	console.log("What the hell?");
}
$();

function work(){
	//arguments;
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
	console.log();
}


work(24,7);
work("all the time");
work(false);
work(24,7,365,"days");



function eat(){
	console.log("Eating...");
}
function eat(items){
	console.log("Eating... " + items);
}
eat();
eat("Rice");
eat("rice",2,"chappatis");
eat(["rice","roti","biriyani","pizza","dessert"]);