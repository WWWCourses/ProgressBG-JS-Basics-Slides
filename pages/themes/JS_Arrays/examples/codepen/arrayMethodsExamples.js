var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(`rainbow: ${rainbow}`);

// LENGTH: броят на елементите на масива
console.log( "\nrainbow.length="+rainbow.length );

// POP(): премахване на последния елемент на масива
var lastElement = rainbow.pop();
console.log( `\nLast element: ${lastElement}`);
console.log(`rainbow after pop: \n${rainbow}`);


// SHIFT(): премахване на първия елемент на масива
var firstElement = rainbow.shift();
console.log( `\nFirst element: ${firstElement}`);
console.log(`rainbow after shift: \n${rainbow}`);

// PUSH(): добавяне на елемент/и в края на масива
rainbow.push("black", "white");
console.log(`\nrainbow after push (at the end): \n${rainbow}`);


// UNSHIFT(): добавяне на елемент/и в началото на масива
rainbow.unshift("black", "white");
console.log(`\nrainbow after unshift (at beginning): \n${rainbow}`);

// REVERSE(): преобръщане на масива (забележете, че така променяме оригиналния масив)
rainbow.reverse();
console.log(`\nrainbow after reverse: \n${rainbow}`);