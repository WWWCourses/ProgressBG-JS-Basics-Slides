let m = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

// find sum of the elements in main diagonal, i.e. m[0][0] + m[1][1] + m[2][2]

let sum = 0;

for (let i = 0; i < m.length; i++) {
	sum += m[i][i];
};

console.log(`sum = ${sum}`);