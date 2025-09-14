// Track unique visitor names
let visitors = new Set();

// Adding visitors
visitors.add("Likitha");
visitors.add("Pragathi");
visitors.add("Likitha"); // Duplicate, will NOT be added again

console.log(visitors);
console.log("Unique visitors:", visitors.size);