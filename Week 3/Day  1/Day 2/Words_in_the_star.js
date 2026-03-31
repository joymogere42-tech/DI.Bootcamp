const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter words separated by commas: ", (input) => {

    // Convert input into array
    const words = input.split(",").map(word => word.trim());

    // Find longest word
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    // Create border
    const border = "*".repeat(maxLength + 4);
    console.log(border);

    // Print words inside frame
    for (let word of words) {
        const spaces = " ".repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    }

    console.log(border);

    rl.close();
});