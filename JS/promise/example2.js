// Function that returns a promise which doubles a number after a delay
function doubleAfterDelay(num) {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 2000); // 2-second delay
    });
}

// Using the function and chaining the promises
doubleAfterDelay(5)
    .then((result1) => {
        console.log("First result:", result1);
        // Return a new promise to chain
        return doubleAfterDelay(result1);
    })
    .then((result2) => {
        console.log("Second result:", result2);
        // Chain another
        return doubleAfterDelay(result2);
    })
    .then((result3) => {
        console.log("Third result:", result3);
        return doubleAfterDelay(result3);
    })
    .then((result4) => {
        console.log("Fourth result:", result4);
    })
    .catch((error) => {
        console.error("Error in chain:", error);
    });

console.log("Chaining promises without blocking.");
