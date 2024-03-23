console.log("Hello");

fullName = "Tony Stark";
console.log(fullName);

ok = true;

fullName = 25; // dynamically typed languagef

let big = BigInt("123");
let sy = Symbol("Hello!");

const students = {
  fullName: "Rahul Kumar",
  age: 20,
  cgpa: 8.2,
  isPass: true,
};
console.log(students);
console.log(students.age);
console.log(students["age"]);

students["age"]++;
console.log(students);

console.log(typeof students);

console.log(typeof students["age"]);

// template literals
let specialString = `Hello Bachi`;
console.log(specialString);
console.log(typeof specialString);
specialString = `Hello Bachi ${1 + 2 + 3}`;
console.log(specialString);

// escape character
// \n
console.log("Apna\nCollege");
let str1 = "Apna\nCollege";
console.log(`Length is ${str1.length}`);
// \t
str1 = "Apna\tCollege";
console.log(str1);
console.log(`Length is ${str1.length}`);

// string methods
str1.toUpperCase();
console.log(str1);
str1 = str1.toUpperCase();
console.log(str1);

// remove whitespaces from starting and ending
str1 = "   new battle   here  ";
console.log(str1);
console.log(str1.trim());

str1 = "abcdefghejklmnopqrstuvwxyz";
// str1.slice(1, 5); // no effect
let res = str1.slice(1, 5);
console.log(res);
res = str1.slice(1);
console.log(res);
res = str1.slice();
console.log(res);
console.log(str1.charAt(5));
// str1.charAt(5)="p"; // not possible
console.log(str1.charAt(5));
str1 = str1.replace("f", "p");
console.log(str1.charAt(5));

str2 = "qwerty";
str1 = str1.concat(str2);
console.log(str1);
let str3 = "hello" + 123;
console.log(str3);

str3 = "hellololololo";
console.log(str3);
str3 = str3.replace("lo", "ke");
console.log(str3);
str3 = str3.replaceAll("lo", "ke");
console.log(str3);

// arrays : collection sof items linear
let mark = [97, 82, 75, 64, 36];
console.log(mark);
console.log(mark.length); // property

console.log(typeof mark); // object is data type
for (let i = 0; i < mark.length; i++) {
  console.log(mark[i]);
}
for (let ind of mark) {
  console.log(ind);
}
mark.push(45);
console.log(mark);
console.log(mark.length);
let poppedMark = mark.pop(); // return
console.log(mark);
console.log(mark.length);

console.log(mark.toString());
console.log(mark);

let mark2 = [1, 2, 3, 4, 5];
let marks = mark.concat(mark2);
console.log(marks);

mark.unshift(98);
console.log(mark);
mark.shift();
console.log(mark);

console.log(mark.slice(1, 2)); // slice return new array

// splice(index,delete Count,newElm1,newElem2)
let arr = [1, 2, 3, 4, 5, 6, 7];
// add Element
arr.splice(2, 0, 101, 103);
console.log(arr);

//delete element
arr.splice(5, 1);
console.log(arr);

// replace elemnt
arr.splice(3, 1, 102);
console.log(arr);

// delete all further
arr.splice(3);
console.log(arr);

// no change
arr.slice();
console.log(arr);

function f() {
  console.log("My F");
}

f();

function ff(msg, a, b) {
  console.log(msg);
  console.log(a + b);
  return a + 2 * b;
}

ff("ooo", 7, 7);
let value = ff("oo", 7, 8);
console.log(value);

// arrow function  stored in varibles
const arrowSum = (a, b) => {
  console.log(a + b);
};

console.log(arrowSum());
console.log(arrowSum);
console.log(arrowSum(3, 4));

const arrowMult = (a, b) => {
  return a * b;
};

console.log(arrowMult());
console.log(arrowMult(3, 4));

const printHello = () => {
  console.log("kok");
};
console.log(printHello());
console.log(printHello);

const printHelloj = () => console.log("kok");

console.log(printHelloj());
console.log(printHelloj);

function fst(str) {
  console.log(str);
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      cnt++;
    }
  }
  console.log(cnt);
  return cnt;
}
const myString = "Hello ji kaise ho";
fst(myString);
const vowelCount = fst(myString); // This will output 6 because there are 6 vowels in the string
console.log(vowelCount);
console.log(fst("abcdefghijklmnopqrstuvwxyz"));

// forEach loop
// forEach is method

// arr.forEach(callBackFunction)

// CallBack is a function passed as a argument to another fuunction

let brr = [1, 2, 3, 4, 5];
brr.forEach(function printVal(val) {
  // val for each element in brr
  console.log(val);
});

// in fomr of arrow function

brr.forEach((val) => {
  console.log(val);
});

//(val,ind,array)

brr.forEach((val, ind, arr) => {
  console.log(val, ind, arr);
});

let a = ["u", "o"];
a.forEach((val, ind, arr) => {
  console.log(val, ind, arr);
});

// higher order function/methods are the functions/methods which passes function as parameter or return function
// for each is higher order

let bec = [1, 2, 3, 4, 5];
bec.forEach((val) => {
  console.log(val);
});

let CalSq = (val) => {
  console.log(val * val);
  // return val * val;
};

bec.forEach(CalSq);

// MAP same as forEach Loop but it create new array
// *****   arr.map(callBackFun(val,inddex,array));
bec.map((val) => {
  console.log(val);
});

let NewArray = bec.map((val) => {
  return val ** 2;
});
console.log(NewArray);

// filter  crete new array based on true condition
let NewArray2 = bec.filter((val) => {
  return val % 2 === 0;
});

console.log(NewArray2);

// reduce
// when we need only single val (result) from array like sum ,average,maximum etc;
// return;

const sum = bec.reduce((res, curr) => {
  return res + curr;
});

console.log(sum);

const maxi = bec.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(maxi);
