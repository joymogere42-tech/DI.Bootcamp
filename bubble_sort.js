const numbers = [5,0,9,1,7,4,2,6,3,8];

// ----------------------------
// 1. toString()
// ----------------------------
console.log("toString result:");
console.log(numbers.toString());

console.log("----------------------------");

// ----------------------------
// 2. join() with different separators
// ----------------------------
console.log("join() default:", numbers.join());
console.log("join('+'):", numbers.join("+"));
console.log("join(' '):", numbers.join(" "));
console.log("join(''):", numbers.join(""));

console.log("----------------------------");

// ----------------------------
// 3. Bubble Sort (Descending Order)
// ----------------------------
let arr = [...numbers]; // copy array so original is not changed

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i - 1; j++) {

        // swap if left is smaller than right (descending order)
        if (arr[j] < arr[j + 1]) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted Descending (Bubble Sort):");
console.log(arr);