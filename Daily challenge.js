// Example sentences
let sentence1 = "This dinner is not that bad ! You cook well";
let sentence2 = "This movie is not so bad !";
let sentence3 = "This dinner is bad !";

// Function to process sentence
function checkSentence(sentence) {
    let wordNot = sentence.indexOf("not");
    let wordBad = sentence.indexOf("bad");

    if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
        let result = sentence.replace(sentence.substring(wordNot, wordBad + 3), "good");
        console.log("Original:", sentence);
        console.log("Result   :", result);
    } else {
        console.log("Original:", sentence);
        console.log("Result   :", sentence);
    }

    console.log("---------------");
}

// Run tests
checkSentence(sentence1);
checkSentence(sentence2);
checkSentence(sentence3);