"use strict";

function attachEvents(){
	// onclick to themes/sub-themes titles:
	const titleNodes = document.querySelectorAll('.themes>article>h2, .themes>article h3');
	for (let titleNode of titleNodes){
		// do not add click on empty lists and remove the arrow class on that title:
		if(titleNode.nextElementSibling && titleNode.nextElementSibling.tagName === "OL" && titleNode.nextElementSibling.children.length === 0){
			titleNode.className = "";
			continue;
		}

		// but add to all others
		titleNode.addEventListener( "click", function(){
			showHideNodes(getNextSiblings(this));
		});
	}

	// onclick to toggleThemes
	const toggleThemes = document.querySelector('.toggleThemes');
	toggleThemes?.addEventListener( "click", ()=>showHideAll( toggleThemes, dom.themes ) );

	// onclick to toggleSubThemes
	const togglesubThemes = document.querySelector('.toggleSubThemes');
	togglesubThemes.addEventListener( "click", ()=>showHideAll( togglesubThemes, dom.subThemes ) );


	// on scroll => toggleButtons displayed as header:
	window.addEventListener('scroll', function(e){
		// console.dir(toggleButtonsDiv);
		const topScroll = document.documentElement.scrollTop;
		const topOffset = dom.toggleButtonsDiv.offsetTop;

		if(topScroll > topOffset - 32){
			dom.toggleButtonsDiv.classList.add('header')
		}else{
			dom.toggleButtonsDiv.classList.remove('header')
		}
	});
}

function setThemeURL(){
	// wrap H3 text into link, with href == section.id path
	// <h3 data-wip>__themeTitle__</h3> =>
	// <h3><a title="slides" href="/ProgressBG-JS-Advanced_React/pages/themes/__themeTitle__/__themeTitle__.html">__themeTitle__</a></h3>

	for(let theme of dom.themes){
		if( theme.hasAttribute("data-wip") ){
			return;
		}

		const h3Node = theme.querySelector("h3");
		const h3_content = h3Node.innerHTML;

		// get section.id
		const themeTitle = theme.id;

		// create link node:
		const aNode = document.createElement('a');
		aNode.setAttribute("title", "slides");
		aNode.href = `pages/themes/${themeTitle}/${themeTitle}.html`;
		aNode.innerHTML = h3_content;

		// append it into h3 node
		h3Node.innerHTML = "";
		h3Node.appendChild(aNode);
	}


}

function setSubThemeHours(){
	// insert <span class=hours> after each h3 in each section:
	for (let theme of dom.themes){
		// get themes hours from "data-hours" attribute:
		const hours = theme.getAttribute("data-hours");

		// create output node:
		const outNode = document.createElement('span');
		outNode.className = 'hours';
		outNode.innerHTML = hours;
		theme.children[0].appendChild(outNode);
	}

}
function setThemesHours(){
	const hours_per_day = config.hours_per_day
	let currentSectionHours = 0;
	let currentDay = 0

	for (let article of dom.articles){
		let sectionHours = 0;

		// calculate hours per section:
		let topicHoursNodes = article.querySelectorAll(".hours");
		for (let topicHoursNode of topicHoursNodes){
			sectionHours+=topicHoursNode.innerHTML*1
		}

		currentSectionHours += sectionHours;
		currentDay = currentSectionHours/hours_per_day

		// create output node:
		let outNode = document.createElement('span');
		outNode.className = 'sectionHours';
		outNode.title = `hours:${currentSectionHours}\nday:${currentDay}`
		outNode.innerHTML = "Total Section Hours: " + sectionHours;
		article.children[0].appendChild(outNode);
	}

}
function calcTotalHours(){
	var out_node = document.getElementById("total_hours");
	var hours_nodes = document.getElementsByClassName("hours");
	var total = 0;
	for (var i = 0; i < hours_nodes.length; i++) {
		var theme_hours = hours_nodes[i].innerHTML*1 || 0; // cause of NaN
		total += theme_hours;
	};
	out_node.innerHTML = total;
}
function calcTotalDays(){
	const hours_nodes = document.getElementsByClassName("hours");
	const out_node = document.getElementById("total_days");
	const hours_per_day = config.hours_per_day
	let current_hours = 0;
	let total_days = 0;
	let current_days = 0;

	for (let hours_node of hours_nodes){
		const theme_hours = hours_node.innerHTML*1 || 0; // cause of NaN
		current_hours += theme_hours;

		// calculate current days and show it as tooltip
		current_days = current_hours / hours_per_day;
		current_days = Math.round(current_days * 10)/10

		// output
		hours_node.title = "hours:" + current_hours;
		hours_node.title += "\n"+"day:" + current_days;
		total_days = current_days;
	}


	// calculate total days
	out_node.innerHTML = total_days;
}

function showHideAll( clicked_node, effected_nodes ){
	// init shown flag
	if(effected_nodes.shown===undefined && config.showSubThemes){
		effected_nodes.shown = true
	}
	if (effected_nodes.shown) {
		hideAllNodes(effected_nodes);
		effected_nodes.shown = false;
		clicked_node.title = 'Show Subtopics';
	}else{
		showAllNodes(effected_nodes);
		effected_nodes.shown = true;
		clicked_node.title = 'Hide Subtopics';
	}
}
function showAllNodes ( effected_nodes){
	for(let node of effected_nodes){
		showNode(node)
	}
}
function hideAllNodes ( effected_nodes){
	for (var i = 0; i < effected_nodes.length; i++) {
		// skip for empty lists:
		if(effected_nodes[i].tagName === "OL" && effected_nodes[i].children.length === 0){
			continue;
		}
		hideNode(effected_nodes[i]);
	};
}
function showHideNodes(effected_nodes){
	effected_nodes.forEach( function(effected_node){
		if ( effected_node.classList.contains("hidden") ){
			showNode(effected_node);
			effected_node.previousElementSibling.title = 'Hide Subtopic';
		}else {
			hideNode(effected_node);
			effected_node.previousElementSibling.title = 'Show Subtopic';
		}
	});
}
function showNode(effected_node){
	effected_node.classList.remove("hidden");

	// change title of the H3 element
	effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Hide Subtopic';
	// change arrow
	var arr_node = effected_node.parentElement.getElementsByTagName("h3")[0];
	changeArrow( arr_node, 'up');
};
function hideNode (effected_node) {
	effected_node.classList.add("hidden");

	// change title of the H3 element
	effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Show Subtopic';
	// change arrow
	var arr_node = effected_node.parentElement.getElementsByTagName("h3")[0];
	changeArrow( arr_node, 'down');
}
function changeArrow ( node, direction ) {
	if ( direction == 'up' ){
		node.classList.remove("arrow_down");
		node.classList.add("arrow_up");
	}else{
		node.classList.remove("arrow_up");
		node.classList.add("arrow_down");
	}
}


function init(){
	attachEvents();
	setThemeURL();

	config.showThemes?
		showAllNodes(dom.themes):
		hideAllNodes(dom.themes);

	config.showSubThemes?
		showAllNodes(dom.subThemes):
		hideAllNodes(dom.subThemes);

	if(config.showSubThemesHours){
		setSubThemeHours()
		calcTotalHours();
		calcTotalDays();
	}
	if (config.showThemesHours && document.documentElement.clientWidth > 700) {
		setThemesHours();
	}
}

const dom = {
	articles : document.querySelectorAll(".themes>article"),
	themes : document.querySelectorAll('.themes>article>section'),
	subThemes : document.querySelectorAll('.themes>article>section>ol'),
	toggleButtonsDiv : document.querySelector('.toggleButtons')
}

const config = {
	hours_per_day: 4,
	showThemes: true,
	showSubThemes: true,
	showThemesHours:true,
	showSubThemesHours:true
}


window.onload = function(){
	init();
}
