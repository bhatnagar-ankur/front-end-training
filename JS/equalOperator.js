var helloVariable;

if (helloVariable) {
    console.log('Hello Number 1');
} else {
    console.log("Number 1 is missing.");
}

(function () {
    console.log("Hello My Anonymous function")
})()

function foo() {
    console.log("Hello from foo");
}

foo();

function sum(a, b) {
    return a + b;
}

var mySym = sum(1, 1);
console.log(mySym);
