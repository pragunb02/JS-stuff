let divs = document.querySelectorAll(".box");
let ind = 0;
for (div of divs) {
  console.dir(div.innerText);
  div.innerHTML += ` value ${ind}`;
  ind++;
}

// divs[0].innerHTML += " value1";
// divs[1].innerHTML += " value3";
// divs[2].innerHTML += " value2";
