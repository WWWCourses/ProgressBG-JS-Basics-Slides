// http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=dark%20side%20of%20the%20moon

var searchForURL = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=';

var nodes = {
	searchInput: document.getElementsByName('textToSearch')[0],
	searchBtn: document.querySelector('.searchWrapper button')
}

var showResults = function(){
	var textToSearch = nodes.searchInput.value;
	var encodedURL = encodeURI( searchForURL+textToSearch);
	console.log(`encodedURL: ${encodedURL}`);
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

nodes.searchBtn.addEventListener('click', showResults);
