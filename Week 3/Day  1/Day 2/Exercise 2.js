// ================= EXERCISE 1 =================
function isBlank(str) {
  return str.length === 0;
}

console.log(isBlank(''));      // true
console.log(isBlank('abc'));   // false


// ================= EXERCISE 2 =================
function abbrevName(name) {
  let parts = name.split(" ");
  return parts[0] + " " + parts[1][0] + ".";
}

console.log(abbrevName("Robin Singh")); // Robin S.


// ================= EXERCISE 3 =================
function swapCase(str) {
  let result = "";

  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));
// tHE qUICK bROWN fOX


// ================= EXERCISE 4 =================
function isOmnipresent(arr, value) {
  for (let subArr of arr) {
    if (!subArr.includes(value)) {
      return false;
    }
  }
  return true;
}

console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1)); // true
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)); // false


// ================= EXERCISE 5 =================
// NOTE: This works only in browser (HTML must have a table)

let table = document.querySelector("table");

if (table) {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
  }
}