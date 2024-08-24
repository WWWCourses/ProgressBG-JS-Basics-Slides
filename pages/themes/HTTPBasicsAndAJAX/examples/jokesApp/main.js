const jokeAPI = 'https://api.chucknorris.io/jokes/random';

const btnShowJoke = document.querySelector('.btnShowJoke');
const output = document.querySelector('.output');

const render = function (output, data) {
	console.dir(data);

	output.innerHTML = data.value;
	output.classList.add('fadeIn');
}

btnShowJoke.addEventListener('click', function (e) {
	fetch(jokeAPI)
	.then( r   => r.json() )
	.then( data=> {
		render(output,data)
	})
})

