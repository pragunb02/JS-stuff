// event handler
let btn1 = document.querySelector("#btn1");

//  remember this
btn1.onclick = (event) => {
  // event object e
  console.log(event);
  console.log(event.type);
  console.log("BTN 1 CLICKED");
};

// inline Event Hnadler  <<<   JS Event Handler (priority)
// also if 2 or more same event handler on a node then last one will override all other , so last one will be executed

// ** event-listener
// 2 or more same event handler on a node possible all will run

// node.addEventListener(event, callback);
// node.removeEventListener(event, callback);
// ** note: the callback reference should be same to remove
let btn2 = document.querySelector("#btn2");
console.log(btn2);
btn2.addEventListener("click", (event) => {
  console.log("Button2 Pressed");
  console.log(event);
});

const funt = (event) => {
  console.log("CallBack Funtion");
  console.log(event);
};
btn2.addEventListener("click", funt);

const funt2 = (event) => {
  console.log("CallBack Funtion Cancelled");
  console.log(event);
};
btn2.removeEventListener("click", funt2);

// doubt at 24:35
