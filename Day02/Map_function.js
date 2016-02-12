var arr = [1,2,3,4,5];

arr.map(function(item){ return item*5; })
   .filter(function(item){ return item %2 == 0;})
   .forEach(function(item){ console.log(item);});

arr = arr.map(function(item){ 
	return item * 5;
});
console.log(arr);
/*
var new_arr = [];
for(var i=0;i<arr.length;i++){
	new_arr.push(arr[i]*5);
}
console.log(new_arr);
*/