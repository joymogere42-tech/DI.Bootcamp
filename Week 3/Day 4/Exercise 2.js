
//  Exercise 1 : Nested functions (converted to arrow functions)

const landscape = () => {

  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log("Exercise 1 Output:", landscape());


// 🌟 Exercise 2 : Closure

const addTo = x => y => x + y;

const addToTen = addTo(10);

console.log("Exercise 2 Output:", addToTen(3));
//  13


//  Exercise 3 : Currying

const curriedSum = (a) => (b) => a + b;

console.log("Exercise 3 Output:", curriedSum(30)(1));
//  31


//  Exercise 4 : Currying

const add5 = curriedSum(5);

console.log("Exercise 4 Output:", add5(12));
//  17


//  Exercise 5 : Composing

const compose = (f, g) => (a) => f(g(a));

const add1 = (num) => num + 1;
const add5b = (num) => num + 5;

console.log("Exercise 5 Output:", compose(add1, add5b)(10));
//  (10 + 5 = 15, then +1 = 16)