//**** Higher Order Functions ****//
// create a secret value that we only have access to
// if we use the correct password to "get" it
function createSecretValue(password, value) {
  // password === 'ilovechicken'
  // value === 'This is top secret'
  return function (guess) {
    return guess === password ? value : 'Unauthorized';
  };
}

const protectedGetter = createSecretValue('ilovechicken', 'This is top secret');
// protectedGetter = function (guess) {
//   return guess === 'ilovechicken' ? 'This is top secret' : 'Unauthorized'
// }

const retrievedValue = protectedGetter('ilovechicken');
// retrievedValue = 'ilovechicken' === 'ilovechicken' ? 'This is top secret' : 'Unauthorized'
// retrievedValue = 'This is top secret';

console.log(retrievedValue);

//**** forEach ****//
// forEach(arr, fn)
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    fn(item);
  }
}

forEach(['a', 'b', 'c'], (item) => console.log(`Item: ${item}`));

//**** map ****//
function map(arr, fn) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const transformed = fn(item);
    mapped.push(transformed);
  }
  return mapped;
}
console.log(map([1, 2, 3, 4], (n) => n * 2));

//**** filter ****//
function filter(arr, fn) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const shouldBeIncluded = fn(item);
    if (shouldBeIncluded) filtered.push(item);
  }
  return filtered;
}
console.log(filter([1, 2, 3, 4], (n) => n % 2 === 0));

//**** every ****//
function every(arr, fn) {
  let allItemsValid = true;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!fn(item)) {
      allItemsValid = false;
      break;
    }
  }
  return allItemsValid;
}
console.log(every([1, 2, 3, 4], (n) => n % 2 === 0));
console.log(every([2, 4, 6, 8], (n) => n % 2 === 0));

//**** some ****//
function some(arr, fn) {
  let hasMatchingItem = false;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (fn(item)) {
      hasMatchingItem = true;
      break;
    }
  }
  return hasMatchingItem;
}
console.log(some([1, 2, 3, 4], (n) => n % 2 === 0));
console.log(some([1, 3, 5, 9], (n) => n % 2 === 0));

//**** add-x-to-number ****//
function numberAdder(x) {
  return function doAdd(y) {
    return x + y;
  };
}
const addFive = numberAdder(5);
const six = addFive(1);
console.log(six);
const addOne = numberAdder(1);
const two = addOne(1);
console.log(two);
const seven = addOne(six);
console.log(seven);

//**** add-punctuation ****//
function addPunctuation(punctuation) {
  // create a function that takes a sentence and adds the punctuation
  // from the addPunctuation call (see numberAdder)
  return function (sentence) {
    return sentence + punctuation;
  };
}

const addExcitement = addPunctuation('!!!');
const excitedSentence = addExcitement('Hello, world'); // Hello, world!!!
const addUnsure = addPunctuation('?!');
const unsureSentence = addUnsure('Really'); // Really?!
