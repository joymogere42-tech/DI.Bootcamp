// Function to validate union types
function validateUnionType(value: any, allowedTypes: string[]): boolean {
  for (let type of allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }
  return false;
}

//  Test variables
let val1 = "Hello";   // string
let val2 = 100;       // number
let val3 = true;      // boolean
let val4 = { name: "Joy" }; // object

// Allowed types
let allowedTypes = ["string", "number"];

//  Testing the function
console.log("val1:", validateUnionType(val1, allowedTypes)); // true
console.log("val2:", validateUnionType(val2, allowedTypes)); // true
console.log("val3:", validateUnionType(val3, allowedTypes)); // false
console.log("val4:", validateUnionType(val4, allowedTypes)); // false

// More tests
console.log(validateUnionType(false, ["boolean", "string"])); // true
console.log(validateUnionType(undefined, ["undefined"])); // true