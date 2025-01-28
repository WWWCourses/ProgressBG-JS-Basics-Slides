const handleError = err=>{
	console.error(`Error: ${err}`)
}

const prepareDinner = ()=>{
	console.log(`prepareDinner will take 2000ms`);
	setTimeout(() => {
		// do work on prepare dinner
		const dinner = 'pizza'
		const success = true;

		if(success){
			console.log(`${dinner} is prepared!`);
			eatDinner(dinner);
		}else{
			handleError(`Can not buy dinner!`);
		}
	}, 2000);
};

const eatDinner = (dinner)=>{
	console.log(`eatDinner will take 500ms`);
	setTimeout(() => {
		// do work on eat dinner
		const success = true;

		if(success){
			console.log(`${dinner} is eaten!`);
			goToBed(`Sweet Dreams after ${dinner} `)
		}else{
			handleError(`Can not eat dinner!`);
		}
	}, 500);
}

const goToBed = (msg)=>{
	console.log(`${msg}`);
}

prepareDinner();
console.log(`Do something else while prepare=>eat=>gotToBed...`);