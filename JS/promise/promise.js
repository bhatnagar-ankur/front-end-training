// Creating a simple promise
let myPromise = new Promise(function (resolve, reject) {
    console.log("Task started...");

    // Simulating some work with setTimeout
    setTimeout(function () {
        let success = false; // Change this to false to test "reject"

        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Something went wrong!");
        }
    }, 1000); // runs after 2 seconds
});

console.log('I am above promise');
// Using the promise
myPromise
    .then(function (result) {
        console.log("Result:", result);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

console.log("Task is running in the background...");

function sum(a, b) { return a + b; }
console.log("Task is running in the background 1...");
console.log("Task is running in the background 2...");
console.log(sum(2, 3));
console.log("Task is running in the background 3...");
console.log("Task is running in the background 4...");
