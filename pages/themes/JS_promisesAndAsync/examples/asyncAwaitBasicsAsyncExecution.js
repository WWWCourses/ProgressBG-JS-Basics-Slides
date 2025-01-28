async function square(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x ** 2);
        }, 1000); // Simulate a delay (1 second)
    });
}

async function calculate() {
    const sum1 = await square(3); // Waits for the result of square(3)
    const sum2 = await square(3); // Waits for the result of square(3)
    console.log(`Total sum: ${sum1 + sum2}`);
}

console.log(`Start`);
calculate();
console.log(`End`);
