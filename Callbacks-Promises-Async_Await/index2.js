// Async-Await
// async function return promises

async function h2() {
  console.log("hello2");
}

function h1() {
  console.log("hello1");
}

console.log(h1());
console.log(h2());

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data!!");
      resolve(200);
    }, 2000);
  });
}

// await api(); wrong way

async function getWeatherData() {
  await api(); // 1st this
  await api(); // then 2nd
  await api();
}

// ??? doubt
getWeatherData();
console.log("no");
console.log(getWeatherData());

function getData1(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`DATA: ${dataID}`);
      resolve("success!!");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// no need of getNextData
async function getALLData1() {
  console.log("fetching data1....");
  await getData1(11);
  console.log("fetching data2....");
  await getData1(22);
  console.log("fetching data3....");
  await getData1(33);
  console.log("fetching data4....");
  await getData1(44);
  console.log("fetching data5....");
  await getData1(55);
}

getALLData1();

// in async-await need to call a function
// solution IIFE: Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as itn is defined

// SYNTAX  **  (func)();

(async function () {
  console.log("fetching data1....");
  await getData1(112);
  console.log("fetching data2....");
  await getData1(223);
  console.log("fetching data3....");
  await getData1(334);
  console.log("fetching data4....");
  await getData1(445);
  console.log("fetching data5....");
  await getData1(556);
})();
