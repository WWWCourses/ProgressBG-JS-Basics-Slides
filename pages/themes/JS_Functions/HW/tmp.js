// TASK: преди да пуснете програмата си запишете какъв очаквате да е изхода от програмата и след това сравнете.

let x = 1;

let foo = function() {
	let x = 2;

	let bar = function(x) {
		console.log("x in bar = ", x)
	};
	bar(99);

	console.log("x in foo = ", x);
}

foo();
console.log("x in main = ", x);