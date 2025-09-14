console.log('\x1b[34m%s\x1b[0m', '----------------------------------------');
console.log('\x1b[34m%s\x1b[0m', 'Curried Functions Examples for Logging');
console.log('\x1b[34m%s\x1b[0m', '----------------------------------------');
// =======================
// #region Logger Functions
// =======================

// Generic logger factory function
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

// Curried loggers for different modules
const appLogger = createLogger('APP');
const authLogger = createLogger('AUTH');
const dbLogger = createLogger('DB');

// Usage examples
appLogger('Application started');    // [APP] Application started
authLogger('User login successful'); // [AUTH] User login successful
dbLogger('Connection established');  // [DB] Connection established

// #endregion Logger Functions

console.log('\x1b[34m%s\x1b[0m', '-------------------------------------------');
console.log('\x1b[34m%s\x1b[0m', 'Curried Functions Examples for URL Building');
console.log('\x1b[34m%s\x1b[0m', '-------------------------------------------');

// =======================
// #region URL Builder
// =======================

// Curried function to build URLs
function buildUrl(base) {
    return function (resource) {
        return function (id) {
            return `${base}/${resource}/${id}`;
        };
    };
}

// Create endpoint builders
const apiBase = buildUrl('https://api.example.com');
const userEndpoint = apiBase('users');
const postEndpoint = apiBase('posts');

// Usage examples
console.log(userEndpoint(42));  // https://api.example.com/users/42  
console.log(postEndpoint(10));  // https://api.example.com/posts/10

// #endregion URL Builder

console.log('----------------------------------------------------');
console.log('Curried Functions Examples for Calculating Discounts');
console.log('----------------------------------------------------');

// =======================
// #region Discount Functions
// =======================

// Curried function to apply a discount rate
function applyDiscount(rate) {
    return function (amount) {
        return amount - amount * rate;
    };
}

// Create discount functions
const tenPercentOff = applyDiscount(0.10);
const twentyPercentOff = applyDiscount(0.20);

// Usage examples
console.log(tenPercentOff(200));    // 180  
console.log(twentyPercentOff(200)); // 160

// #endregion Discount Functions
