const jokeAPI = 'http://api.icndb.com/jokes/random';

const btnShowJoke = document.querySelector('.btnShowJoke');
const output = document.querySelector('.output');

const render = function (output, data) {
	console.dir(data);

	output.innerHTML = data.value.joke;
	output.classList.add('fadeIn');
	// output.classList.remove('fadeIn');
}

btnShowJoke.addEventListener('click', function (e) {
	fetch(jokeAPI)
	.then( r   => r.json() )
	.then( data=> {render(output,data)} )
})

// TASK:
// On ".btnShowJoke" click do the following:
// -> make request to jokeAPI url
// -> parse the returned json data with JSON.parse(str)
// -> render the "joke" value from data into ".output" div

