// Так можна
let sayHi;
condition = "boy";
if (condition == "boy") {
  sayHi = function () {
    alert("Hello, boy!");
  };
} else {
  sayHi = function () {
    alert("Hello, girl!");
  };
}
sayHi(); // виведе "Hello, boy!" або "Hello, girl!" в залежності від умови condition
