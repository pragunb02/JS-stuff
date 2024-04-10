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

// callback hell-nested callback

function getData(dataID) {
  // database taking time
  setTimeout(() => {
    console.log(`DATA: ${dataID}`);
  }, 2000);
  // console.log(`DATA:${dataID}`);
}

getData(1);

function getData1(dataID, getNextData) {
  // database taking time
  setTimeout(() => {
    console.log(`DATA: ${dataID}`);
    if (getNextData) {
      getNextData();
    }
    // console.log(`DATA: ${dataID}`);
  }, 8000);
  // console.log(`DATA:${dataID}`);
}

// ** wronng
getData1(1, getData1(2));

getData1(1, () => {
  // call back se function
  getData1(2);
});

getData1(4, () => {
  // call back se function
  console.log("getting data6...");
  getData1(6, () => {
    console.log("getting data7...");
    getData1(7, () => {
      console.log("getting data9...");
      getData1(9);
    });
  });
});

// call back hell difficult to understand
// solution : Promises

// promises is for eventual completetion of task
// promises is an object in JS

// let promise = new Promise((resolve,reject)=>{...})
//                            function with 2 handlers

// resolve and reject are callbacks provided by js

// next file
