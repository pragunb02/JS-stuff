// call back hell difficult to understand
// solution : Promises

// promises is for eventual completetion of task
// promises is an object in JS

// let promise = new Promise((resolve,reject)=>{...})
//                            function with 2 handlers

// ** resolve and reject are callbacks provided by js

// 3 PromiseState: fullfiled , pending , rejected   state

// let promise = new Promise((resolve, reject) => {
//   console.log("I AM A PROMISE");
// });

let promise = new Promise((resolve, reject) => {
  console.log("I AM A PROMISE");
  resolve(123);
});

let promise1 = new Promise((resolve, reject) => {
  console.log("I AM A PROMISE");
  //   resolve(123);
  reject("error");
});

function getdata(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess");
      //   reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 6000);
  });
}
// console.log(promise2);
let promise2 = new getdata(123);
console.log(promise2);
console.log(promise2);

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise!!");
    resolve("success");
    // reject("failed");
  });
};

let pr = getPromise();
pr.then((res) => {
  // result provided by js
  console.log("fulfilled", res);
});
pr.catch((err) => {
  // err provided by js
  console.log("rejected", err);
});

console.log(pr);

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Checked");
      resolve("success");
    }, 2000);
  });
}

// const p = asyncFunc();
// console.log("Fetching Data1...");
// p.then((res) => {
//   console.log("Fetching Data2...");
//   const p2 = asyncFunc();
//   p2.then((res) => {});
// });

// promises chainig
console.log("Fetching Data1...");
asyncFunc().then((res) => {
  console.log("Fetching Data2...");
  asyncFunc().then((res) => {});
});

function getData1(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`DATA: ${dataID}`);
      resolve("success!!");
      if (getNextData) {
        getNextData();
      }
    }, 10000);
  });
}

// call back hell
// getData1(4, () => {
//   console.log("getting data6...");
//   getData1(6, () => {
//     console.log("getting data7...");
//     getData1(7, () => {
//       console.log("getting data9...");
//       getData1(9);
//     });
//   });
// });

//  by promises chaining // no use of getNextData CallBACK HERE
// getData1(1).then((res) => {
//   console.log(res);
//   getData1(2).then((res) => {
//     console.log(res);
//   });
// });

// OR syntax also  promises chaining
getData1(1234)
  .then((res) => {
    return getData1(2345);
  })
  .then((res) => {
    return getData1(3456);
  })
  .then((res) => {
    console.log(res);
  });
// somewhat complex also

// Async-Await
// async function return promises
