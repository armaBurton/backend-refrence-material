DEMO: `forEach`
---

## Challenge

Write a function that iterates over each element in an array and calls a provided function.

```js
function forEach(arr, fn) {
```

> **You can assume valid inputs

## Test Cases

| Input                                                     | Output                                        |
| --------------------------------------------------------- | --------------------------------------------- |
| [1, 2], console.log                                       | _logs `1` and `2`_                            |
| [3, 4], (n) => console.log(n * 2)                         | _logs `6` and `8`_                            |
| ["World", "Universe"], (x) => console.log(`Hello, ${x}!`) | _logs `Hello, World!` and `Hello, Universe!`_ |
