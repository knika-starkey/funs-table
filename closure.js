// function fouter() {
//   let v = 100;
//   function finner() {
//     alert("v =" + v); // v = 100
//   }
//   finner();
// }
// fouter(); // v = 100

// function closure(n) {
//   let localVar = n;
//   let fun = function () {
//     return localVar;
//   };
//   return fun;
// }
// let one = closure(1);
// console.log(one());

// let two = closure(2);
// console.log(two());

// let twoH = closure(200);
// console.log(twoH());

function initCounter(name) {
  //   let strR = "%c red ", "background: red; color: #da8a55";
  //   let strG ="%c green ", "background: green; color: #bada55";
  let color = `green`;
  let innerCounter = function () {
    switch (color) {
      case `red`:
        color = `yellow`;
        break;
      case `yellow`:
        color = `green`;
        break;
      default:
        color = `red`;
        break;
    }
    let arr = {};
    arr.name = name;
    arr.color = color;
    return arr;
  };
  return innerCounter;
}
let counter1 = initCounter("First"); // перший лічильник

// console.log(counter1()); // 1

let a = counter1();
console.log(`%c ${a.name}: ${a.color}`, `background:${a.color}`);
console.log(counter1());
console.log(counter1());

let counter2 = initCounter("Second"); // перший лічильник
console.log(counter2());
console.log(counter1());

// let color = "red";
// let n = "1";
// console.log(`%c ${n}: ${color}`, `background:${color}`);
