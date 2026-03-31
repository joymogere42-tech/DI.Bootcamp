// =====================
// Exercise 1: Random Number
// =====================
function randomEvenNumbers() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number:", randomNum);

    for (let i = 0; i <= randomNum; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
randomEvenNumbers();


// =====================
// Exercise 2: Capitalized Letters
// =====================
function capitalize(str) {
    let evenCaps = "";
    let oddCaps = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i].toLowerCase();
        } else {
            evenCaps += str[i].toLowerCase();
            oddCaps += str[i].toUpperCase();
        }
    }

    return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef")); // ["AbCdEf", "aBcDeF"]


// =====================
// Exercise 3: Palindrome
// =====================
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// =====================
// Exercise 4: Biggest Number
// =====================
function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) return 0;

    let max = null;

    for (let i = 0; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] === "number") {
            if (max === null || arrayNumber[i] > max) {
                max = arrayNumber[i];
            }
        }
    }

    return max === null ? 0 : max;
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0


// =====================
// Exercise 5: Unique Elements
// =====================
function uniqueElements(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

console.log(uniqueElements([1,2,3,3,3,3,4,5])); // [1,2,3,4,5]


// =====================
// Exercise 6: Calendar (DOM)
// =====================
function createCalendar(year, month) {
    let table = document.createElement("table");
    table.border = "1";

    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    // Header row
    let headerRow = document.createElement("tr");
    for (let day of days) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    let date = new Date(year, month - 1, 1);
    let row = document.createElement("tr");

    // Adjust so Monday is first day
    let startDay = (date.getDay() + 6) % 7;

    // Empty cells before start
    for (let i = 0; i < startDay; i++) {
        let td = document.createElement("td");
        td.textContent = ".";
        row.appendChild(td);
    }

    while (date.getMonth() === month - 1) {
        let td = document.createElement("td");
        td.textContent = date.getDate();
        row.appendChild(td);

        if ((date.getDay() + 6) % 7 === 6) {
            table.appendChild(row);
            row = document.createElement("tr");
        }

        date.setDate(date.getDate() + 1);
    }

    // Fill remaining cells
    if (row.children.length > 0) {
        while (row.children.length < 7) {
            let td = document.createElement("td");
            td.textContent = ".";
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

// Example:
// createCalendar(2012, 9);