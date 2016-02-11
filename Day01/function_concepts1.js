//Function Hoisting

sleep();

function sleep(){
	console.log("Sleeping");
}

sleep();
function sleep(){
	console.log("Snoring");
}
sleep();
function sleep(){
	console.log("Crying");
}
sleep();