function calcSum_Sync(arr){
    console.log(arr.reduce((ac, el)=>ac+el));
}

function calcSum_Async(arr){
    //setTimeout is executed asynchronous and is not blocking the rest of the code!
    setTimeout(()=>{console.log( arr.reduce((ac, el)=>ac+el) )}, 0)
}

// generate array of integers (1..1_000_000)
const numbers =  Array.from({length:1_000_000},(_,i)=>i+1);

console.log(`~~~~~ Sync execution ~~~~~`);
calcSum_Sync(numbers);
console.log(`Do other task`);

console.log(`\n~~~~~ Async execution ~~~~~`);
calcSum_Async(numbers);
console.log(`Do other task`);
