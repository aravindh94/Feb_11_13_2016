angular.module("Lab03")
.service("MenuService",function(){
	this.menuItems = [
		{ name: "Veg & Hot Soup", unitprice: 49},
		{ name: "Veg Lung Fung Soup", unitprice: 89},
		{ name: "Veg Manchow Soup", unitprice: 79},
		{ name: "Veg Sweet Corn Soup", unitprice: 59}
	];
})
.service("ShoppingCartService",function(){
	this.orderedItems = [];
	this.getTotal = function(){
		var total = 0;
		this.orderedItems.forEach(function(it){
			total += it.price;
		});
		return total;
	}
	this.removeItem = function(item){
		var new_set_of_items = [];
		for (var i = 0; i < this.orderedItems.length; i++) {
			var orderedItem = this.orderedItems[i];
			if(orderedItem.name == item.name){
				if(orderedItem.quantity > 1){
					orderedItem.quantity -= 1;
					orderedItem.price = orderedItem.quantity * orderedItem.unitprice;
					new_set_of_items.push(orderedItem);
				}
			}
			else{
				new_set_of_items.push(orderedItem);
			}
		}
		this.orderedItems = new_set_of_items;
	}
	
	this.addItem = function(item){
		var filtered_items = this.orderedItems.filter(function(it){ 
			return it.name == item.name; 
		});
		if(filtered_items.length == 0){
			this.orderedItems.push({
				name : item.name,
				quantity: 1,
				unitprice: item.unitprice,
				price : item.unitprice
			});
		}
		else{
			this.orderedItems.map(function(it){
				if(it.name == item.name){
					it.quantity += 1
					it.price = it.quantity * item.unitprice
				}
			});
		}
	}
});