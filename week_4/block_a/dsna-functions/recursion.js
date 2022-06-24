//**** recursion-sum ****//
function sum(n) {
  // 1. write out the exit
  if (n === 0) return 0;
  // 2. find the quickest route to recall the function
  return n + sum(n - 1);
}
console.log(sum(5));
console.log(sum(1));
console.log(sum(12));

//**** digits-sum-root ****//
function rootDigit(n) {
  const digits = n.toString().split('');
  if (digits.length === 1) return n;

  const sum = digits.map((digit) => Number(digit)).reduce((a, b) => a + b);

  return rootDigit(sum);
}
console.log(rootDigit(123));
console.log(rootDigit(4322));
console.log(rootDigit(999_888_777));

//**** repeat-string ****//
function repeat(txt, n) {
  if (n === 1) return txt;
  return txt + repeat(txt, n - 1);
}
console.log(repeat('Hi', 3));
console.log(repeat('Hello', 1));

//**** fibonacci ****//
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
}
console.log(fib(8));
console.log(fib(1));

//**** largest-even ****//
function largestEven([n, ...rest]) {
  if (n === undefined) return -1;
  return Math.max(n % 2 === 0 ? n : -1, largestEven(rest));
}
console.log(largestEven([1, 2, 10, 21]));
console.log(largestEven([0, 17, 525, 22]));

//**** say-it ****//
function sayIt(initial) {
  function chain(sentence) {
    return function (word) {
      if (word === undefined) return sentence;
      return chain(`${sentence} ${word}`);
    };
  }
  return chain(initial);
}
console.log(sayIt('Hello')('there,')('World!')());
