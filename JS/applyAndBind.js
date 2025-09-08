// Base student object
const student1 = {
  name: "Likitha",
  grade: "A",
  subjects: ["Math", "Science", "English"]
};

const student2 = {
  name: "Priyanka", 
  grade: "A+",
  subjects: ["History", "Art", "Music"]
};

const student3 = {
  name: "Pragathi", 
  grade: "A",
  subjects: ["Science", "English", "Music"]
};

const student4 = {
  name: "Prathyusha", 
  grade: "A+",
  subjects: ["Computer", "Physics", "Chemistry"]
};

const student5 = {
  name: "Haney", 
  grade: "A",
  subjects: ["Biology", "Computer", "Environment"]
};

// Standalone function that we'll use with call, apply, and bind
function displayStudentInfo(message, punctuation) {
  return `${message} ${this.name} has grade ${this.grade} in subjects: ${this.subjects.join(", ")}${punctuation}`;
}

//#region Call
// Using call() - arguments passed individually
console.log("----------- Call ----------- ")
console.log(displayStudentInfo.call(student1, "Congratulations!", "🎉"));

console.log(displayStudentInfo.call(student2, "Good job", "!"));

// Another example with different messages
console.log(displayStudentInfo.call(student1, "Student Profile:", "."));

//#endregion Call

//#region Apply
// Using apply() - arguments passed as array
console.log("----------- apply ----------- ")

console.log(displayStudentInfo.apply(student3, ["Congratulations!", "🎉"]));

console.log(displayStudentInfo.apply(student4, ["Good job", "!"]));

const messageArgs = ["Student Profile:", "."];
console.log(displayStudentInfo.apply(student3, messageArgs));

//#endregion Apply

//#region Bind

// Using bind() - creates new functions
const displayAliceInfo = displayStudentInfo.bind(student4);
const displayBobInfo = displayStudentInfo.bind(student5);

console.log("----------- Bind ----------- ")

console.log(displayAliceInfo("Congratulations!", "🎉"));

console.log(displayBobInfo("Good job", "!"));

setTimeout(() => {
  console.log(displayAliceInfo("Reminder:", " - Don't forget to study!"));
}, 1000);

//#endregion Bind
