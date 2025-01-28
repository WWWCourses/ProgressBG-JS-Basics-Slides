const handleError = err=>{
	console.error(`Error: ${err}`)
}

const prepareDinner = (successCallback, errorCallback)=>{
	console.log(`prepareDinner will take 2000ms`);
	setTimeout(() => {
		// do work on prepare dinner
		const dinner = 'pizza'
		const success = true;

		if(success){
			console.log(`prepareDinner finished successfully (${dinner})!`);
			successCallback(dinner);
		}else{
			errorCallback(`Can not buy dinner!`);
		}
	}, 2000);
};

const eatDinner = (dinner, successCallback, errorCallback)=>{
	console.log(`eatDinner will take 500ms`);
	setTimeout(() => {
		// do work on eat dinner
		const success = true;

		if(success){
			console.log(`eatDinner finished successfully!`);
			successCallback(`Go to bed after ${dinner}`)
		}else{
			errorCallback(`Can not eat dinner!`);
		}
	}, 500);
}

const goToBed = function(msg){
	console.log(`${msg}`);
}

// Callback hell
prepareDinner((prepareRes)=>{
	eatDinner(prepareRes, (eatRes)=>{
		goToBed(eatRes)
	},handleError)
},handleError)

console.log(`Do something else while prepare=>eat=>gotToBed...`);
