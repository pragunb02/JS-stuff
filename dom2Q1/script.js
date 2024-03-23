let el = document.querySelector("body");
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

el.prepend(newBtn);
