
// =====================
// EXERCISE 1 (Article)
// =====================

console.log("\n=== EXERCISE 1 ===\n");

const article = {
  h1: "Some Facts",
  h2: "The Chocolate",
  h3: "History of the chocolate",
  paragraphs: [
    "Chocolate is made from tropical Theobroma cacao tree seeds.",
    "After the European discovery of the Americas, chocolate became very popular.",
    "Chocolate has since become a popular food product that millions enjoy every day.",
    "But what effect does eating chocolate have on our health?"
  ]
};

console.log("H1:", article.h1);

// remove last paragraph
article.paragraphs.pop();

// simulate bold button
const makeBold = (text) => `**${text}**`;

console.log("\nParagraphs:");
article.paragraphs.forEach(p => console.log(makeBold(p)));

// =====================
// EXERCISE 2 (Form)
// =====================

console.log("\n=== EXERCISE 2 ===\n");

function submitForm(firstname, lastname) {
  if (!firstname || !lastname) {
    console.log("Error: fields cannot be empty");
    return;
  }

  const ul = [];
  ul.push(firstname);
  ul.push(lastname);

  console.log("Users Answer:");
  ul.forEach(item => console.log("-", item));
}

// simulate form submit
submitForm("John", "Doe");

// =====================
// EXERCISE 3 (Bold text)
// =====================

console.log("\n=== EXERCISE 3 ===\n");

let allBoldItems = [];

function getBoldItems(sentence) {
  allBoldItems = sentence.match(/\*\*(.*?)\*\*/g);
  console.log("Bold items:", allBoldItems);
}

function highlight(sentence) {
  return sentence.replace(/\*\*(.*?)\*\*/g, (match) => {
    return match.toUpperCase();
  });
}

function returnItemsToDefault(sentence) {
  return sentence.replace(/\*\*/g, "");
}

const sentence = "**Hello** I hope you are enjoying **this** class";

getBoldItems(sentence);
console.log("Highlighted:", highlight(sentence));
console.log("Normal:", returnItemsToDefault(sentence));

// =====================
// EXERCISE 4 (Sphere Volume)
// =====================

console.log("\n=== EXERCISE 4 ===\n");

function sphereVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

const radius = 5;
console.log("Radius:", radius);
console.log("Volume:", sphereVolume(radius));