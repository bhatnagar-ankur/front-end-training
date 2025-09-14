async function myFunction() {
    // return "Resolved First";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly resolve or reject for demonstration
            if (Math.random() > 0.5) {
                resolve("Resolved");
            } else {
                reject("Rejected");
            }
        }, 1000);
    });
}

async function myAsyncDisplay() {
    try {
        let value = await myFunction();   // waits for promise resolution
        console.log(value);
    } catch (error) {
        console.log("Error: ", error);
    }
}
myAsyncDisplay();
