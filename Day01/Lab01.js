//Lab02.js

add(1,2,342,324,5,65,6,7,8);
add(65,6,7,8);
add(7,8,99,9,99,9);

function add() {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	console.log('Sum: ' + total);
}		

function greatest() {
	if(arguments.length > 0){
		var max = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			if (arguments[i] > max)
				max = arguments[i]; 
		}
		console.log("Greatest: " + max);
	}
}


greatest(1,2,342,324,5,65,6,7,8);
greatest(11,-2,5342);