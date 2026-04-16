
// 1. Types
type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

// 2. Union Type
type Data = User | Product | Order;

// 3. Function with Type Guards
function handleData(arr: Data[]): string[] {
  const result: string[] = [];

  for (let item of arr) {
    if (item.type === "user") {
      result.push(`Hello ${item.name}, you are ${item.age} years old.`);
    } 
    else if (item.type === "product") {
      result.push(`Product ID ${item.id} costs $${item.price}.`);
    } 
    else if (item.type === "order") {
      result.push(`Order ${item.orderId} has amount $${item.amount}.`);
    } 
    else {
      result.push("Unknown data type received.");
    }
  }

  return result;
}

// 4. TEST DATA
const data: Data[] = [
  { type: "user", name: "Alice", age: 22 },
  { type: "product", id: 101, price: 500 },
  { type: "order", orderId: "ORD123", amount: 1200 }
];

// 5. RUN FUNCTION
console.log(handleData(data));