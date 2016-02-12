angular.module("Lab03")
.controller("MenuController",function($scope,$rootScope,MenuService){
	$scope.items = MenuService.menuItems;
	$scope.addToShoppingCart = function(item){
		$rootScope.$broadcast("item_added",item);
	}
})
.controller("ShoppingCartController",function($scope,ShoppingCartService){
	$scope.shoppingCart = ShoppingCartService.orderedItems;
	$scope.total = 0;
	
	$scope.$on("item_added",function(e,value){
		ShoppingCartService.addItem(value);
		$scope.total = ShoppingCartService.getTotal();
	});
	$scope.removeFromShoppingCart = function(item){
		ShoppingCartService.removeItem(item);
		$scope.shoppingCart = ShoppingCartService.orderedItems;
		$scope.total = ShoppingCartService.getTotal();
	};
	
})