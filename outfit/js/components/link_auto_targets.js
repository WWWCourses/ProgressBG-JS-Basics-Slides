// attach target="_blank" to all external links:
function extLinksToBlank(){
	var extLinks = document.querySelectorAll("a[href^=http]");

	for (var i = 0, len=extLinks.length; i < len ; i++) {
		extLinks[i].setAttribute("target", "_blank");
	}
}