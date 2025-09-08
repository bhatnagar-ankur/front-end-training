// Constructor function (old way before classes)
// var Person = function(argsName, argsAge) {
//     console.log(this);
//     this.name = argsName;
//     this.age = argsAge;

//     this.greet = function() {
//         return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
//     };
// }

// // Create instances
// const person1 = new Person("Johnny Bravo", 25);
// const person2 = new Person("Dexter", 8);

// console.log(person1.greet());
// console.log(person2.greet());









class Car {
    constructor(brand, model) {
        console.log(this);
        this.brand = brand;
        this.model = model;
        this.isRunning = false;

        this.myArrowFunc = () => { return "new Arrow Func"; }
        this.myRegularFunc = function () { return "new Regular Func"; }
    }

    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} is now running!`;
    }

    stop() {
        this.isRunning = false;
        return `${this.brand} ${this.model} has stopped.`;
    }

    getStatus() {
        const status = this.isRunning ? "running" : "stopped";
        return `${this.brand} ${this.model} is currently ${status}`;
    }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.myArrowFunc());
console.log(myCar.myRegularFunc());
console.log(myCar.start()); // "Toyota Camry is now running!"
console.log(myCar.getStatus()); // "Toyota Camry is currently running"

console.log(myCar.stop()); // "Toyota Camry is now not running!"
console.log(myCar.getStatus()); // "Toyota Camry is currently not running"

