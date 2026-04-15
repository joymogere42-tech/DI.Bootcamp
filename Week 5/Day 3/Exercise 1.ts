// 🌟 Exercise 1: Class with Access Modifiers
class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

const emp1 = new Employee("John", 50000, "Developer", "IT");
console.log(emp1.getEmployeeInfo());


// 🌟 Exercise 2: Readonly Properties
class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

const prod1 = new Product(1, "Laptop", 1200);
console.log(prod1.getProductInfo());

// ❌ This will cause an error if uncommented
// prod1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property


// 🌟 Exercise 3: Inheritance
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

const dog1 = new Dog("Buddy");
console.log(dog1.makeSound());


// 🌟 Exercise 4: Static Methods
class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(Calculator.add(5, 3));
console.log(Calculator.subtract(10, 4));


// 🌟 Exercise 5: Interfaces
interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Membership: ${user.membershipLevel ?? "None"}`);
}

const user1: PremiumUser = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold"
};

printUserDetails(user1);