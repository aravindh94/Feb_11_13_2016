function Book(_title,_price){
	this.title = _title;
	this.price = _price;
	this.buy = function(store){
		console.log("Buying " + this.title + " from " + store);
	}
}
//Book();
var b1 = new Book("Frontline",60);
console.log(b1.title + ", " + b1.price);
b1.buy("Landmark");

var b2 = new Book("Outlook",40);
console.log(b2.title + ", " + b2.price);
b2.buy("Amazon");