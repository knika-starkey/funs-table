"use strict";
function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step | 1;
  document.write("<table border='1' cellspacing='0'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
function quadratic(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}
function half(x) {
  return x / 2;
}
let sqrt = function (x) {
  return Math.sqrt(x);
};

let sin = function (x) {
  return Math.sin(x);
};
let cos = function (x) {
  return Math.cos(x);
};
let tg = function (x) {
  return Math.tan(x);
};
let arr = [quadratic, cube, half, sqrt, sin, cos, tg];
// printTable(-10, 10, 2, quadratic);
// printTable(-10, 10, 1, cube);
printTable(
  +prompt("Мінінмум?"),
  +prompt("Максимум?"),
  +prompt("Крок"),
  arr[
    +prompt(
      "1 - квадрат числа\n2 - куб\n3 - половина\n4 - корень\n5 - сінус\n6 - косінус\n7 - тангенс"
    ) - 1
  ]
);
