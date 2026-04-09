// ==========================
//  1st Daily Challenge
// ==========================

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const allStrings = words.every(word => typeof word === "string");

    if (allStrings) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items are strings");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length is not greater than 4");
    }
  });
}

// Tests
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

  const morse = `{
  "0": "-----","1": ".----","2": "..---","3": "...--","4": "....-",
  "5": ".....","6": "-....","7": "--...","8": "---..","9": "----.",
  "a": ".-","b": "-...","c": "-.-.","d": "-..","e": ".","f": "..-.",
  "g": "--.","h": "....","i": "..","j": ".---","k": "-.-","l": ".-..",
  "m": "--","n": "-.","o": "---","p": ".--.","q": "--.-","r": ".-.",
  "s": "...","t": "-","u": "..-","v": "...-","w": ".--","x": "-..-",
  "y": "-.--","z": "--.."
}`;

// 1. Convert JSON string → JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
}

// 2. Convert word → morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const word = prompt("Enter a word or sentence:").toLowerCase();

    const result = [];

    for (let char of word) {
      if (morseJS[char]) {
        result.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" not found in Morse`);
        return;
      }
    }

    resolve(result);
  });
}

// 3. Display in DOM
function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n");

  const pre = document.createElement("pre");
  pre.textContent = output;
  document.body.appendChild(pre);
}

// IMPORTANT: CHAIN FUNCTIONS CORRECTLY
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(result => joinWords(result))
  .catch(error => console.log(error));

