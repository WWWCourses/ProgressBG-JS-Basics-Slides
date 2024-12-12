// Synchronous example
console.log("Synchronous Example:");
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Asynchronous example with async/await
async function asyncFunction() {
    const result = await new Promise(resolve => resolve("Step 2 (Async)"));
    console.log(result);
}

console.log("\nAsynchronous Example:");
console.log("Step 1");
asyncFunction();
console.log("Step 3");
