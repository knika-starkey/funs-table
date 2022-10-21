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
  let color = `${name} green`;
  let innerCounter = function () {
    switch (color) {
      case `${name} red`:
        color = `${name} yellow`;
        break;
      case `${name} yellow`:
        color = `${name} green`;
        break;
      default:
        color = `${name} red`;
        break;
    }
    return color;
  };
  return innerCounter;
}
let counter1 = initCounter("First"); // перший лічильник
console.log(counter1()); // 1
console.log(counter1());
console.log(counter1());

let counter2 = initCounter("Second"); // перший лічильник
console.log(counter2());
console.log(counter1());
