// Function that returns a promise which doubles a number after a delay
function doubleAfterDelay(num) {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 2000); // 1-second delay
    });
}

function tripleAfterDelay(num) {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000); // 1-second delay
    });
}

function FourAfterDelay(num) {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(num * 4);
        }, 500); // 1-second delay
    });
}

// Using the function and chaining the promises
doubleAfterDelay(5)
    .then((result1) => {
        console.log("First result:", result1); // 10
    });

FourAfterDelay(5)
    .then((result1) => {
        console.log("First result:", result1); // 10
    });

tripleAfterDelay(5).then((result2) => {
    console.log("Second result:", result2); // 20
});

console.log("Chaining promises without blocking.");
