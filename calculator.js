"use strict";
let val1 = 0;
let val2 = 0;
let action = "";
let result;

function add() {
  val1 = +document.getElementById("num").value;
  action = "+";
}

function calc() {
  val2 = +document.getElementById("num").value;
  //   if (action == "+") {
  //     result = val1 + val2;
  //   }
  //
  let expr = val1 + action + val2;
  let result = eval(expr);
  document.getElementById("num").value = result;
}
