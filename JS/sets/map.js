// Employee ID to name mapping
let employeeMap = new Map();

employeeMap.set(101, "Priyanka");
employeeMap.set(102, "Prathyusha");

// Get employee name by ID
console.log(employeeMap.get(101)); // Output: Priyanka

// Loop through employees
employeeMap.forEach((str, num) => {
    console.log("ID:", num, "Name:", str);
});
