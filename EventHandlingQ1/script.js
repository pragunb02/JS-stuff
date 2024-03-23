// // methode 1

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// modeBtn.addEventListener("click", () => {
//   if (currMode === "light") {
//     currMode = "dark";
//     document.querySelector("body").style.background = "black";
//   } else {
//     currMode = "light";
//     document.querySelector("body").style.background = "white";
//   }
//   console.log(`Mode Changed to ${currMode}`);
// });

// method 2
let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
  } else {
    currMode = "light";
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  }
  console.log(`Mode Changed to ${currMode}`);
});
