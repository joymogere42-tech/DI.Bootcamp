// ============================
// Exercise 1 : Menu
// ============================

const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" }
];

// 1. Check if at least one dessert exists (ternary operator)
const hasDessert = menu.some(item => item.type === "dessert")
  ? "Yes dessert exists"
  : "No dessert";

console.log(hasDessert);
// Output: Yes dessert exists


// 2. Check if all are starters
const allStarters = menu.every(item => item.type === "starter");
console.log(allStarters);
// Output: false


// 3. Check if main course exists, else add one
const hasMain = menu.some(item => item.type === "main");

if (!hasMain) {
  menu.push({ type: "main", name: "Grilled Chicken with Rice" });
}

console.log(menu);
// Output: menu now includes main course


// 4. Add vegetarian key
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

const updatedMenu = menu.map(item => {
  const isVegetarian = vegetarian.some(v =>
    item.name.toLowerCase().includes(v)
  );

  return { ...item, vegetarian: isVegetarian };
});

console.log(updatedMenu);
// Output: menu objects now include vegetarian: true/false


// ============================
// Exercise 2 : Chop into chunks
// ============================

function string_chop(str, size) {
  let result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

console.log(string_chop('developers', 2));
// Output: ["de", "ve", "lo", "pe", "rs"]


// ============================
// Exercise 3 : Search word
// ============================

function search_word(sentence, word) {
  const count = sentence.split(" ").filter(w => w === word).length;
  return `'${word}' was found ${count} times.`;
}

console.log(search_word('The quick brown fox', 'fox'));
// Output: 'fox' was found 1 times.


// ============================
// Exercise 4 : Reverse Array
// ============================

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // swap
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1,2,3,4,5]));
// Output: [5,4,3,2,1]

console.log(reverseArray([1,2]));
// Output: [2,1]

console.log(reverseArray([]));
// Output: []

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));
// Output: [10,9,8,7,6,5,4,3,2,1]