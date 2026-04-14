// Exercise 1: Hello, World!
console.log("Hello, World!");

//  Exercise 2: Type Annotations
let age: number = 25;
let personName: string = "Joy";
console.log("Name:", personName, "Age:", age);

//  Exercise 3: Union Types
let id: string | number;
id = 101;
console.log("ID:", id);
id = "A102";
console.log("ID:", id);

//  Exercise 4: Control Flow (if...else)
function checkNumber(num: number): string {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log("Check 5:", checkNumber(5));
console.log("Check -3:", checkNumber(-3));
console.log("Check 0:", checkNumber(0));

//  Exercise 5: Tuple Types
function getDetails(name: string, age: number): [string, number, string] {
  return [name, age, `Hello, ${name}! You are ${age} years old.`];
}
const details = getDetails("Alice", 25);
console.log("Details:", details);

//  Exercise 6: Object Type Annotations
type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person = createPerson("Bob", 30);
console.log("Person:", person);

//  Exercise 7: Type Assertions
const inputElement = document.getElementById("myInput") as HTMLInputElement;

if (inputElement) {
  inputElement.value = "Hello TypeScript!";
  console.log("Input value set to:", inputElement.value);
}

//  Exercise 8: switch Statement
function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

//  Exercise 9: Function Overloading
function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
  return "Hello, Guest!";
}

console.log(greet());
console.log(greet("Joy"));