var numbers = [ -1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];
console.log("Всички числа: " + numbers + "\n\n");

printEvenNumbers();
printOddNumbers();

function printEvenNumbers( ){
	console.log("Четните числа са:");
	for (var i = 0; i < numbers.length; i++){
		if ( numbers[i] != 0 && numbers[i] % 2 == 0 ){
			console.log( "\t"+numbers[i]);
		}
	}
};

function printOddNumbers( ){
	console.log("Нечетните числа са:")
	for (var i = 0; i < numbers.length; i++){
		if ( numbers[i] % 2 != 0 ){
			console.log( "\t"+numbers[i]);
		}
	}
};

function printNumber( numbers ){	
	console.log("Четни | Нечетни");

	for (var i = 0; i < numbers.length; i++){
		if ( numbers[i] % 2 == 0 ){
			console.log( numbers[i] + '    |');
		}else{
			console.log( "      |  "+ numbers[i]);
		}
	}
}