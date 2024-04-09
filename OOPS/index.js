// a javascript object is entity having state
// and behaviour (properties and method)

const student = {
  fullName: "Pragun Bhutani",
  mark: 94.4,
  printMarks: function () {
    console.log(`marks are ${this.mark}`);
  },
  printMarks1() {
    console.log(`marks are ${this.mark}`);
  },
};
// all objects haver prototype

console.log(student);

console.log(student.printMarks());

console.log(student.printMarks);

let arr = ["apple", "mango"];
console.log(arr);

console.log(typeof arr); // arr is object

arr.push("tomato");
// push is protoytpe
// all prototype are inherted by default

console.log(arr);

// custom prototype

const employee = {
  caltax() {
    console.log("Tax are 10%");
  },
};

const hr1 = {
  salary: 1000,
};

const hr2 = {
  salary: 2000,
  caltax() {
    // ** pripority
    console.log("Tax are 20%");
  },
};

console.log(hr1);
hr1.__proto__ = employee;
console.log(hr1);

console.log(hr2);
hr1.__proto__ = employee;
console.log(hr2);

// typeof Prototype is reference of an object or maybe null

// ** classes in JS
// bulk
// template
// blueprint
class Car {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
}

let car1 = new Car();
let car2 = new Car();
car1.setBrand("Toyota");
car2.setBrand("Maruti");
console.log(car1);
console.log(car2);

// constructor
// constructor() method is
// * automatically invoked by new
// * initializes object

class Cars {
  constructor(brand, mileage) {
    this.brandName = brand;
    this.mileage = mileage;
    console.log("Constructor Invoked, creating new object");
  }
}
let cars1 = new Cars("BMW", 10);
console.log(cars1);
let cars2 = new Cars();
console.log(cars2);

// inheritance in js
// inhertiance is passing down properties and methods from parent class to child class

// key-word extends

class Parent {
  hello() {
    console.log("hello!!!!!");
  }
}

class Child extends Parent {}

let obj = new Child();

console.log(obj.hello());
// console.log(obj.abc()); // error

class Childs extends Parent {
  hello() {
    console.log("Method Overiding");
  }
}

let obj1 = new Childs();

console.log(obj1.hello());

// super key-word

class Person1 {
  constructor(name) {
    console.log("here3");
    this.species = "homo-spaiens";
    this.name = name;
    console.log("here4");
  }
  eat() {
    console.log("eating!");
  }
}

class Engineer extends Person1 {
  constructor(name) {
    console.log("here1");
    super(name); // to invoke parent class constructor with paremeter
    console.log("here2");
  }
  work() {
    super.eat();
    console.log("Solve Porblems!");
  }
}

let engobj = new Engineer("Pragun");
console.log(engobj);
