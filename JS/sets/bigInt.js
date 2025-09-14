// Large Invoice IDs
let invoiceA = 9999999999999999n;   // 'n' suffix creates a BigInt
let invoiceB = BigInt("123456789012345678901234567890");

let totalInvoices = invoiceA + invoiceB;
console.log(totalInvoices); // Output: 123456789022456668901234567889n

// Regular numbers lose precision at this size!


// Two invoice IDs close to JavaScript Number's safe limit
let invoiceNumber1 = 9007199254740992; // Number
let invoiceNumber2 = invoiceNumber1 + 1; // Number (expected 9007199254740993)

let invoiceBigInt1 = 9007199254740992n; // BigInt
let invoiceBigInt2 = invoiceBigInt1 + 1n; // BigInt (exact value)

// Visualize results
console.log("Using Number:");
console.log("Invoice 1:", invoiceNumber1);
console.log("Invoice 2:", invoiceNumber2);

console.log("Using BigInt:");
console.log("Invoice 1:", invoiceBigInt1);
console.log("Invoice 2:", invoiceBigInt2);

// Check equality
console.log("Are Numbers equal?", invoiceNumber1 === invoiceNumber2); // true (unexpected!)
console.log("Are BigInts equal?", invoiceBigInt1 === invoiceBigInt2); // false (as expected)



let bigNum = 12345678912345.6789;
console.log(bigNum); // Output: 12345678912345.68 (rounded, only 16-17 digits preserved)
