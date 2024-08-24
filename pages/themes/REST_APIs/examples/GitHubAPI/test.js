(function(){
	var aux = {
		attachQueryParams: function(params){
			var query = '?';
			for(key in params){
				query += `${key}=${params[key]}&`;
			}
			query = query.replace(/&$/,'');
			return query;
		},
		toJS: {
			fromJSON: (response)=>{
				return JSON.parse(response);
			},
			fromXML:()=>{}
		},
		fromJS:{
			toJSON: (obj)=>{
				JSON.stringify(obj);
			},
			toXML:()=>{}
		},
		DOMcache:{
			output: document.getElementsByClassName('output')[0],
		}
	};
	var fetchByXHR = {
		get:function(url){
			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
					   		new ActiveXObject("Microsoft.XMLHTTP");

			xhr.open("GET", url, true);
			// xhr.setRequestHeader('Content-Type',  'application/x-www-form-urlencoded');

			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				    renderHTML(this.responseText);
				};
			};

			xhr.send();
		},
		post:function(url){
			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
					   		new ActiveXObject("Microsoft.XMLHTTP");

			xhr.open("POST", url, true);
			xhr.setRequestHeader('Content-Type',  'application/x-www-form-urlencoded');

			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				    renderHTML(this.responseText);
				};
			};

			xhr.send();
		},
	}
	var fetchByFetch = function(url){
	  	fetch(url)
			.then(function (response) {
				return response.text();
			})
			.then(function (responseText) {
				renderHTML(responseText);
			})
	};
	var gitHubAPI = {
		gitApiUrl:'https://api.github.com',
		auth:{
			user: 'ProgressBG-JavelinGroup',
			access_token:'ed63145820815432b5dcf9fc40a52ca91189f4e2',
		},
		myStats:function(params){
			var URL = this.gitApiUrl+'/users/'+username+'/repos';
		},
		listUserRepos: function(username, params){
			var URL = this.gitApiUrl+'/users/'+username+'/repos';
			var reposData;
			var repos;

			if (params){
				URL += aux.attachQueryParams(params);
			}

			// fetchByFetch(encodeURI(URL));
			fetchByXHR.get(encodeURI(URL));
		},
		searchUsers:function(params){
			var URL = this.gitApiUrl+'/search/users';

			// if (params){
			// 	URL += aux.attachQueryParams(params);
			// };
			// console.log(encodeURI(URL));

			// search?q=language%3Ajavascript+location%3Arussia&type=Users
			// fetchByFetch(encodeURI(URL));
			fetchByXHR.post(encodeURI(URL));
		}
	};
	var lastFMapi = {
		auth:{
			user: 'Nemsys',
			app:'TestMe',
			key:'8f69dcba0f14d8454164079f46312262',
			secret: '79fc8d60ddb285dfc3087b0fb16e9e15',
			access_token:'ed63145820815432b5dcf9fc40a52ca91189f4e2',
		},
	};

	var renderHTML = function(responseText){
		var repos =  aux.toJS.fromJSON(responseText);
      		repos && repos.forEach( repo=>{
			aux.DOMcache.output.innerHTML += `<li><span>${repo.name}</span><span>updated at ${repo.updated_at}</span></li>`
		})
	}

	var init = (function(){
		var githubUser = 'Angular';
		// gitHubAPI.listUserRepos(githubUser,{type:'owner', sort:'updated'});
		gitHubAPI.listUserRepos(githubUser,{type:'owner', sort:'updated'});
	})();
})();
