var numArray = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];

console.log('The negative odd array elements are:');

for (var i = 0; i < numArray.length; i++) {
	const element = numArray[i];

	if ((element < 0) && (element % 2 !== 0)) {
		console.log(element);
	}
}