const calcSum = ()=>{
    let sum = 0;
    for (let i = 0; i < 2000_000_000; i++) {
        sum+=i;
    }
    console.log(`sum=${sum}`);
};


console.log(`Start`);
setTimeout(() => {
    console.log(`Hello`);
}, 0);

calcSum();
console.log('End');