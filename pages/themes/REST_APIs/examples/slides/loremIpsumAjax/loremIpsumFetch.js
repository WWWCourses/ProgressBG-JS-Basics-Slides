var nodes={
	output:  document.getElementsByClassName('output')[0],
	getDataBtn: document.getElementsByClassName('getDataBtn')[0],
};

var dataURL = 'loremIpsum.txt';

var FetchCallClassic = function(url){
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (responseText) {
			// do something with responseText
			nodes.output.innerHTML = responseText;
		})
}

var FetchCallClassicWithErrorCatch = function(url){
	fetch(url)
		.then(function (response) {
			if( response.text){
				return response.text();
			}else{
				throw new Error("No response.text")
			}
		})
		.then(function (responseText) {
			// renderHTML(responseText);
			nodes.output.innerHTML = responseText;
		})
		.catch( function(error){
			console.error('An error occured');
        		console.error(error.message);
		});
}

var FetchCallStructures = function(url){
	fetch(url).
		then( function(response){
			console.dir(response);
			return response;
			// return response.json();// parse json
		}).
		then( function(data){
			console.log(data);
		}).
		catch( function(error){
			console.error('An error occurred');
        		console.error(error.message);
		});
}

function loadJSON(url) {
    fetch(url)
           	.then(function (response) {
           		console.dir(response);
       			return response;
           	})
            	.then(function (data) {
            	    	console.log('JSON from "' + url + '" parsed successfully!');
            	    	console.log(data);
            	})
            	.catch(function (error) {
            	    	console.error(error.message);
            	});
}


nodes.getDataBtn.addEventListener('click', function(){
	// FetchCallStructures(dataURL);
	FetchCallClassic(dataURL);
	// loadJSON('https://api.github.com/users/malyw');// is parsed normally
});