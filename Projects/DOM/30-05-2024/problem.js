// Question-1 👇

class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(101, 500);
const account2 = new BankAccount(102);

account1.deposit(200);
account2.deposit(1000);

account1.withdraw(150);
account2.withdraw(500);

account1.withdraw(600);

console.log(`Final balance of account1: $${account1.getBalance()}`);
console.log(`Final balance of account2: $${account2.getBalance()}`);

// Question-2 👇

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     displayDetails() {
//         console.log(`Vehicle Details: ${this.year} ${this.make} ${this.model}`);
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, numberOfDoors) {
//         super(make, model, year);
//         this.numberOfDoors = numberOfDoors;
//     }

//     displayDetails() {
//         console.log(`Car Details: ${this.year} ${this.make} ${this.model}, Doors: ${this.numberOfDoors}`);
//     }
// }

// const vehicle1 = new Vehicle("Toyota", "Corolla", 2020);
// const car1 = new Car("Honda", "Civic", 2021, 4);

// vehicle1.displayDetails();

// car1.displayDetails();

// Question-3 👇

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea() {
//         return this.width * this.height;
//     }

//     calculatePerimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// const myRectangle = new Rectangle(10, 5);

// const area = myRectangle.calculateArea();
// console.log(`Area of the rectangle: ${area}`);

// const perimeter = myRectangle.calculatePerimeter();
// console.log(`Perimeter of the rectangle: ${perimeter}`);

//  Question-4 👇
// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     displayDetails() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
//     }
// }

// const person1 = new Person('Alice', 30, 'USA');
// const person2 = new Person('Bob', 25, 'Canada');

// person1.displayDetails();
// person2.displayDetails();
