angular.module("Lab01")
.service("StockService",function($http){
	this.getSymbols = function(callback){
		$http({
			url : "/stock",
			method : "GET"
		}).success(callback);
	};
})
.service("YahooQuotesService",function($http){
	var base_url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22SYMBOL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';
	this.getQuote = function(symbol,callback){
		$http({
			url : base_url.replace("SYMBOL",symbol),
			method : "GET"
		}).success(function(response){
			if(response.query.results != null){
				var price = response.query.results.quote.LastTradePriceOnly;
				var change = response.query.results.quote.Change;
				callback(symbol,price,change);
			}
			else{
				callback(symbol,'-','-');
			}
			
		});
	};
});
