var fetchByFetch = function(url, fn){
  	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (responseText) {
			fn(responseText);
		})
};

var url  = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&encode=url3986';