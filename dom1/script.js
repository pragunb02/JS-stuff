console.log("hello");
window.console.log("hELLO");
console.log(window);
console.dir(window);
console.log(document);
console.dir(document);
console.log(window.document);
console.dir(window.document); // property and methods  of object passed
console.log(document.body);
console.dir(document.body);
console.dir(document.head);
console.dir(document.body.childNodes[1]);
document.body.childNodes[3].innerText = "ABCD-CHGANGES";

// dom manipulation

// element access
// by id  (unique)  #id
let result = document.getElementById("heading"); // return NULL  wHEN NO elements with this id name
console.log(result);
console.dir(result);

// by class (same maybe)  .class
let result1s = document.getElementsByClassName("c1"); // return HTML COLLECTIONS  LIKE ARRAY(NOT EXCAT) // HAVE PROPERTY LIKE LENGTH
console.log(result1s);
console.dir(result1s);

// by tag
let result2s = document.getElementsByTagName("p");
console.log(result2s);
console.dir(result2s);

// query Selector
let elements = document.querySelector("p");
console.log(elements);
console.dir(elements);
let elementsALL = document.querySelectorAll("p"); // return NODE LIST
console.log(elementsALL);
console.dir(elementsALL);

let elements1 = document.querySelector(".c1");
console.log(elements1);
console.dir(elements1);
let elementsALL1 = document.querySelectorAll(".c1"); // return NODE LIST
console.log(elementsALL1);
console.dir(elementsALL1);

let elements2 = document.querySelector("#heading");
console.log(elements2);
console.dir(elements2);
let elementsALL2 = document.querySelectorAll("#heading"); // return NODE LIST
console.log(elementsALL2);
console.dir(elementsALL2);

// // DOM Manipulation Property
// tagNAME  :: return tag for element node
// innerText
// innerHTML
// textContent

let firstEl = document.querySelector("p");
console.dir(firstEl);
console.dir(firstEl.tagName);

// every nodes(elements in DOM TREE)
// all have firstChild and lastChild Property
console.dir(document.body.firstChild);

// DOM Have
// 3 types of Nodes
// elements  -- main
// comments
// text nodes`
