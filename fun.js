"use strict";
// let expr = prompt("Введіть вираз:", "2*10+8");
// alert(eval(expr));
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
let f;
// function quadratic(x) {
//   return x * x;
// }
// function cube(x) {
//   return x * x * x;
// }
let expr = prompt("Введіть функцію");
eval("f = function(x) {return " + expr + ";}");
printTable(+prompt("Мінінмум?"), +prompt("Максимум?"), +prompt("Крок"), f);
