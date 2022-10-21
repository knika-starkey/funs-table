function sum(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

//console.log(sum(5));

function fibo(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibo(n - 2) + fibo(n - 1);
  }
}
alert(fibo(+prompt("Яке число фібонначі бажаєте?")));
