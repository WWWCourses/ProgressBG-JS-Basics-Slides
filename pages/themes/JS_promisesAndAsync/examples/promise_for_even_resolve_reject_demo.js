let promiseForEven = new Promise( (resolve, reject)=>{
	setTimeout(function(){
		let num = Math.round(Math.random()*100);

		if(num%2 === 0){
			console.log(`Promise for even number is fulfilled!`);
			resolve(num)
		}else{
			console.log(`Promise for even number is rejected!`);
			reject(num)
		}
	},2000)

})

function promiseFulfilled(num){
	console.log('Let do something with '+num);
}

function promiseRejected(num){
	console.log('Error: '+num);
}


promiseForEven
	.then( promiseFulfilled )
	.catch( promiseRejected )


console.log(`I'm doing something important and I don't want to wait`);
