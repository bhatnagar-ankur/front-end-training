// Hidden meta-data property
const hiddenKey = Symbol("hiddenKey");

let user = {
  name: "Scrooge McDuck",
  [hiddenKey]: "Trillionaire"
};

console.log(user.name);
console.log(user['name']);
console.log(user[hiddenKey]);
console.log(Object.keys(user)); // Output: [ 'name' ] (symbol is not listed!)

console.log(user);
