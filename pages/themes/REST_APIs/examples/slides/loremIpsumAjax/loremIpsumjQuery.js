var dataURL = 'loremIpsum.txt';
// https://raw.githubusercontent.com/ProgressBG-WWW-Courses/JavaScript-Advanced/gh-pages/downloads/products.json

var getByJQuery = function(cb){
	$(".getDataBtn").click(function(){
		$.get(dataURL, function(data, status){
			// do something with data:
			// $(".output").html(data);
			cb(data);
		});
	});
}

var loadByJQuery = function(){
	$(".getDataBtn").click(function(){
	    $(".output").load(dataURL);
	});
}

var productData;
var parseData = function(str) {
	// var res = JSON.parse(str);
	render(str);
}
var render = function(data){
	$(".output").html(data);
}
getByJQuery(render);

