
// 1. Simple Types
type Student = {
  name: string;
  age: number;
};

// 2. Object using type
const student1: Student = {
  name: "Brian",
  age: 20
};

// 3. Union Type + Type Guard
function checkValue(value: string | number): string {
  if (typeof value === "string") {
    return "You gave a string";
  } else {
    return "You gave a number";
  }
}

console.log(checkValue("Hello"));
console.log(checkValue(10));

// 4. Function with parameter types
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 7));

// 5. Generic function
function showData<T>(data: T): T {
  return data;
}

console.log(showData<string>("TypeScript is fun"));
console.log(showData<number>(100));