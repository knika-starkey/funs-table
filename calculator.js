"use strict";
let val1 = 0;
let val2 = 0;
let action = "";
let result;

// let add = document.getElementById("add");
// add.

let acts = document.getElementsByClassName("action");
for (let i = 0; i < acts.length; i++) {
  acts[i].addEventListener("click", function () {
    val1 = +document.getElementById("num").value;
    action = acts[i].value;
  });
}

let calc = document.getElementById("calc");
calc.addEventListener("click", function () {
  val2 = +document.getElementById("num").value;
  //   if (action == "+") {
  //     result = val1 + val2;
  //   }
  //
  let expr = val1 + action + val2;
  let result = eval(expr);
  document.getElementById("num").value = result;
});
