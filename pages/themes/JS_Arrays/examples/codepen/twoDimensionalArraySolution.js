var fruitsData = [
	["apple", "orange", "cherry"],
	[1.2, 2.0, 3.5],
];

// TASK: log in console using fruitsData and for loop:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5

// the non-efective (stupid) way:
// console.log( fruitsData[0][0] +'='+ fruitsData[1][0]);
// console.log( fruitsData[0][1] +'='+ fruitsData[1][1]);
// console.log( fruitsData[0][2] +'='+ fruitsData[1][2]);


// the cleaver way:
// >>>>>>>>>>>> SOLUTION >>>>>>>>>>>>
let rowsLen = fruitsData.length;
let colsLen = fruitsData[0].length;

// console.log(`rowsLen: ${rowsLen}, colsLen: ${colsLen}\n`);

// loop over columns first:
for (let j = 0; j < colsLen; j++) {
	// for each column we need to print a new string:
	let printStr = "";

	// loop over rows:
	for (let i = 0; i < rowsLen; i++) {
		printStr += fruitsData[i][j] + "="
	}

	// remove the last character ("=") from the printStr:
	console.log(printStr.slice(0, -1));
}