var nodes={
	output:  document.getElementsByClassName('output')[0],
	getDataBtn: document.getElementsByClassName('getDataBtn')[0],
};

var dataURL = 'loremIpsum.txt';

var AJAXcall = function(){
	// create a XMLHttpRequest object
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
					new ActiveXObject("Microsoft.XMLHTTP");

	// initializes the request:
	xhr.open("GET", dataURL, true);

	// EventHandler, that will be fired each time when the xhr state changes
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// finally do something with content:
			nodes.output.innerHTML = this.responseText;
		};
	};

	// sends the request:
	xhr.send();
};

nodes.getDataBtn.addEventListener('click', function(){
	AJAXcall();
});