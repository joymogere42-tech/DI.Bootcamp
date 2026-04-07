// ============================
// Exercise 1 : map analysis
// ============================

const result1 = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

console.log(result1);
// Output: [2, 4, 6]


// ============================
// Exercise 2 : reduce analysis
// ============================

const result2 = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

console.log(result2);
// Output: [1, 2, 0, 1, 2, 3]


// ============================
// Exercise 3 : index i
// ============================

const arrayNum = [1, 2, 4, 5, 8, 9];

const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num); // browser alert
    return num * 2;
});

// ANSWER:
// i is the INDEX of the array element
// So i = 0, 1, 2, 3, 4, 5


// ============================
// Exercise 4 : Nested arrays
// ============================

// 1. Flatten to required structure
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const flat1 = array.flat(3);
console.log(flat1);
// Output: [1, 2, 3, 4, 5]

// to match exactly: [1,2,3,[4],[5]]
const custom = array.map(item =>
  Array.isArray(item[0]) ? item.flat(2) : item
);

console.log(custom);
// Output: [1, 2, 3, [4], [5]]


// 2. Greeting array transformation
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"]
];

const joinedArray = greeting.map(arr => arr.join(" "));
console.log(joinedArray);
// Output:
// ["Hello young grasshopper!", "you are", "learning fast!"]

const sentence = joinedArray.join(" ");
console.log(sentence);
// Output:
// Hello young grasshopper! you are learning fast!


// 3. Trapped number
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const freed = trapped.flat(Infinity);
console.log(freed);
// Output: [3]