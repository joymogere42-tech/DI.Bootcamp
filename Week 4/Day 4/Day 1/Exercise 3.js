// =========================
// Exercise 1: Sum elements
// =========================

const arr1 = [10, 20, 30, 40];

const sum = arr1.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum);
// Output: Sum: 100


// =========================
// Exercise 2: Remove duplicates
// =========================

const arr2 = [1, 2, 2, 3, 4, 4, 5];

const noDuplicates = [...new Set(arr2)];

console.log(noDuplicates);
// Output: [1, 2, 3, 4, 5]


// =========================
// Exercise 3: Remove certain values
// =========================

const arr3 = [NaN, 0, 15, false, -22, '', undefined, 47, null];

const cleaned = arr3.filter(Boolean);

console.log(cleaned);
// Output: [15, -22, 47]


// =========================
// Exercise 4: Repeat function
// =========================

function repeat(str, n = 1) {
    return str.repeat(n);
}

console.log(repeat("Ha!", 3));
// Output: Ha!Ha!Ha!


// =========================
// Exercise 5: Turtle & Rabbit
// =========================

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// align animals
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

console.log(startLine);
console.log(turtle);
console.log(rabbit);