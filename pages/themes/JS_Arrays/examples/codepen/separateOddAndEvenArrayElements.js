// separateArrayElementsInNewArrays

// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that Zero is neither positive nor negative number!


const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

// >>>>> your code goes bellow:
for (let i = 0; i < numbersArr.length; i++) {
    const element = numbersArr[i];
    if(element === 0){
        continue;
    }else if(element > 0 && element%2===0){
        evenNums.push(element);
    }else{
        oddNums.push(element);
    }
}
console.log(`evenNums: ${evenNums}`);
console.log(`oddNums: ${oddNums}`);

console.log( (evenNums.length + oddNums.length) === numbersArr.length );

// expected output:
evenNums: 6,2,4
oddNums: 1,-3,5,-8,3
