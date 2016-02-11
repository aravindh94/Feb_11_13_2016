var person = new Object();
person.name = "Sam";
person.age = 12;
person.eat = function(){
	console.log("Eating");
};
person.eat();

//JSON
var person2 = {
	name : "Ram",
	age : 13,
	eat : function(){
		console.log("Eating");
	}
};
person2.eat();

console.log(person);
var dt = new Date();

var str = new String("str");
var str2 = "str";

var arr = new Array();
var arr2 = [];

var obj = new Object();
var obj2 = {};