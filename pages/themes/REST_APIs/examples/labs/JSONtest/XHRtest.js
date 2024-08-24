var oNode = document.getElementById("output");

var parseAnything = function(str){
	oNode.innerHTML = str;
}
var fetchByXHR = {
	get: function(url){
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
				   		new ActiveXObject("Microsoft.XMLHTTP");

		xhr.open("GET", url, false);

		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			    // renderHTML(this.responseText);
			    console.log(this.responseText);

			    parseAnything(this.responseText);

			};
		};

		xhr.send();
	},
};
var fetchByFetch = function(url){
	fetch(url).then(function (response) {
    response.text().then(function (responseText) {
      renderHTML(responseText);
    });
  });
};

fetchByXHR.get("data/getME.txt");

