const mergeWords = (string) => (nextString) => {
  if (nextString === undefined) {
    return string;
  } else {
    return mergeWords(string + " " + nextString);
  }
};

// Testing
console.log(mergeWords("Hello")()); 
console.log(mergeWords("There")("is")("no")("spoon.")());