const URL = "https://cat-fact.herokuapp.com/facts/"; /// api end point
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
// IN FETCH API RETURN PROMISE
// *** get request  ***
// let pr = fetch(URL);
// console.log(pr);

const getFacts = async () => {
  //   console.log("getting data....");
  let response = await fetch(URL);
  //   console.log(response); // json format
  //   console.log(response.status);
  //   console.log(response.body);
  let data = await response.json(); // json to js object  .. parser data to js object from json
  //   console.log(data);
  //   console.log(data[0].text);
  factPara.innerText = data[0].text;
};

// // BY promise chaining
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[0].text;
//     });
// }

btn.addEventListener("click", getFacts);

// getFacts;
// getFacts();

// header in api contain additional info
