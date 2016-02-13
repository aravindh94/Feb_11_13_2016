angular.module("Lab01")
.controller("StockController",function($scope,StockService,YahooQuotesService,$interval){
	
	StockService.getSymbols(function(output){
		var symbols = [];
		output.symbols.forEach(function(item){
			symbols.push({
					name : item,
					price : 0,
					change: 0
			});
		});
		$scope.symbols = symbols;
	});
	$interval(queryMarket,10000);
	function queryMarket(){
		if($scope.symbols.length > 0){
			$scope.symbols.forEach(function(symbol){
				YahooQuotesService.getQuote(symbol.name,processResults);
			});
		}
	}
	function processResults(symbol,price,change){
		$scope.symbols.map(function(item){
			if(item.name == symbol){
				item.price = price;
				item.change = change;
			}
		});
	}
	
	
	
});
