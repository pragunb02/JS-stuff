let elem = document.querySelector("div");
console.log(elem);

let id = elem.getAttribute("id");
console.log(id);

let names = elem.getAttribute("names");
console.log(names);

elem.setAttribute("names", "pogo");
names = elem.getAttribute("names");
console.log(names);

console.log(elem.style); // inline css shown ????
console.dir(elem.style); // inline css shown

elem.style.backgroundColor = "purple";
// elem.style.visibility = "hidden";
elem.style.fontSize = "26px";

let newBtn = document.createElement("button");
newBtn.innerText = "click Me!";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);
// // div.prepend(newBtn);

// // div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> HI , I AM Pragun </i>";

let body = document.querySelector("body");
body.prepend(newHeading);

let para = document.querySelector("p");
para.remove();

// ?? appendChild  read
// ?? removeChild
