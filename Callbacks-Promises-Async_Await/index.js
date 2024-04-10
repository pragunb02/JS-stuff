// Synchronous Programming
console.log("one");
console.log("two");

// async programming
function hello() {
  console.log("hello");
}

setTimeout(hello, 4000); // 4000ms=4s

setTimeout(() => {
  console.log("world");
}, 5000);

console.log("three");
console.log("four");

// call back
function sum(a, b) {
  console.log(a + b);
}

function sumCalc(a, b, sumCallback) {
  sumCallback(a, b);
}

sumCalc(5, 10, sum);

let a = 5,
  b = 7;
function sumCalc2(a, b, sumCallback) {
  sumCallback(a, b);
}
sumCalc2(a, b, (a, b) => {
  console.log(a + b);
});

// setTimeout is async

const fun = () => {
  console.log("delayed Func");
};

setTimeout(fun, 4000);
