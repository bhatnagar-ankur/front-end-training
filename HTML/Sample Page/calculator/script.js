// Get the display element
const display = document.getElementById('result');

// Function to append numbers and operators to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        // Replace × with * for calculation
        let expression = display.value.replace(/×/g, '*');

        // Check if expression is not empty
        if (expression === '') {
            return;
        }

        // Evaluate the expression
        let result = eval(expression);

        // Handle division by zero
        if (!isFinite(result)) {
            display.value = 'Error';
            return;
        }

        // Display result
        display.value = result;

    } catch (error) {
        // Handle invalid expressions
        display.value = 'Error';
    }
}

// Add keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Numbers and operators
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-') {
        appendToDisplay(key);
    } else if (key === '*') {
        appendToDisplay('×');
    } else if (key === '/') {
        event.preventDefault(); // Prevent default browser search
        appendToDisplay('/');
    } else if (key === '.') {
        appendToDisplay('.');
    }

    // Function keys
    else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Prevent invalid input in display
display.addEventListener('keypress', function (event) {
    event.preventDefault();
});




// Sample code below which will not work and used in the script this is just for reference summary of the function

/**
 * Get all employee details by ID
 * @param {number} employeeId 
 * @param {string} employeeName 
 * @returns {Array<Object>}
 */
function getAllEmployeeDetailsById(employeeId, employeeName) {

    /**
     * Get employee details by ID
     * @param {number} employeeId
     * @returns {Object}
     */
    function foo() {
    }
    foo();

    return [{
        id: employeeId,
        name: 'John Doe',
        age: 30,
        position: 'Software Engineer'
    }];
}


var student = {
    /**
     * Get student address by ID
     * @param {number} studentId
     * @returns {Promise<Object>}
     */
    getStudentAddress: function(studentId) {
        // Simulate an API call to get student address
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: studentId,
                    address: '123 Main St, Anytown, USA'
                });
            }, 1000);
        });
    },

    /**
     * Get student details by ID
     * @param {number} studentId
     * @returns {Promise<Object>}
     */
    getStudentDetails: function (studentId) {
        // Simulate an API call to get student details
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: studentId,
                    name: 'Jane Smith',
                    age: 20,
                    major: 'Computer Science'
                });
            }, 1000);
        });
    }
}