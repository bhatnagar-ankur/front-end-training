
console.log('I am global scope');
str = 'Priyanka';
let num = 10, age = 'Hello age';
for (let i = 0; i < 5; i++) {
    let age = 20;
    str = 'Likitha';
}

console.log('global scope', age, num, str);

function displayInfo() {
    let age = 200;
    console.log('function scope', age, num);
}

displayInfo();

console.log('global scope', age, num);