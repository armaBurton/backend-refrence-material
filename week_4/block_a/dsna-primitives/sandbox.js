//**** Splitting a word into characters ****//
const word = 'word';
const letters = word.split('');
console.log(letters);

//**** Splitting a sentence into words ****//
const sentence = 'A sentence is a collection of words';
const words = sentence.split(' ');
console.log(words);

//**** Accessing characters of strings by index ****//
const firstLetter = word[0];
console.log(firstLetter);

//**** String immutability ****//
// This means that we're unable to change a string variable
// after we've assigned it. To make changes to a string,
// we have to assign those changes to a new variable
word[0] = word[0].toUpperCase(); // This won't work:
console.log(word);

// But when we assign to a new variable, it does:
const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
console.log(capitalizedWord);

//**** `reverse-sentence-words` ****//
// Create a function that takes a sentence and reverses each word
// Given: "Here is a Sentence"
// Return: "ereH si a ecnetneS"
function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords('Here is a sentence'));

//**** `title-case-words` ****//
// Create a function that takes a sentence and rEVERSE tITLE cASES eACH wORD
// Given: "Here is a Sentence"
// Return: "Here Is A Sentence"
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
console.log(titleCase('Here is a sentence'));

//**** Modulo Operator ****//
// Divides the left number by the right number and
// returns the remainder using whole numbers only,
// no floats/decimals/fractions
const result = 9 % 2;
// 9 /2
console.log(result);

//**** Ternaries ****//
// Ternaries are short-hand if/else statements, eg:
false ? console.log('is true') : console.log('is false');
// the above is equivalent to:
if (true) {
  console.log('is true');
} else {
  console.log('is false');
}

//**** oddish-evenish ****//
function oddishOrEvenish(number) {
  const sumOfDigits = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((sum, n) => sum + n);

  return sumOfDigits % 2 ? 'Oddish' : 'Evenish';
}
console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));

//**** at ****//
function at(arr, index) {
  // access the array at index
  // if index is negative, start from the end of the array
  // otherwise, treat it as a normal index

  // if (index > -1) {
  //   return arr[index];
  // } else {
  //   return arr[arr.length + index];
  // }

  console.log(arr.length);
  console.log(index);
  console.log(5 + -2);
  return index > -1 ? arr[index] : arr[arr.length + index];
}
console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));
// Testing your assumptions:
console.log(at([1, 2, 3], 0) === 1);

//**** sorting ****//
['a', 'b', 'Aa', 'AA', 'bB', 'bb'].sort();
[1, 2, 10, 50, 500, 90].sort((a, b) => a - b);

//**** remove duplicates ****//
const numbers = [1, 1, 1, 2, 3, 4];
const unique = new Set(numbers);
const uniqueArray = [...unique];

//**** fizz-buzz ****//
function fizzBuzz(number) {
  const list = [];

  for (let i = 1; i < number; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   list.push('FizzBuzz');
    // } else if (i % 3 === 0) {
    //   list.push('Fizz')
    // } else if (i % 5 === 0) {
    //   list.push('Buzz')
    // } else {
    //   list.push(i);
    // }

    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    list.push(result || i);
  }

  return list;
}
console.log(fizzBuzz(16));

//**** anagrams ****//
const orderLetters = (word) => word.split('').sort().join('');

function anagrams(wordOne, wordTwo) {
  // Make it work:
  // const first = wordOne.split('').sort().join('');
  // const second = wordTwo.split('').sort().join('');
  // return first === second;

  // Then make it "right":
  return orderLetters(wordOne) === orderLetters(wordTwo); // O(1)
}
console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));

//**** unique-string ****//
function uniqueString(strings) {
  const orderedUniqueLetters = strings.map((s) => [...new Set(s)].sort());
  const duplicates = [...new Set(...orderedUniqueLetters)];

  return strings.find((string) => {
    return duplicates.indexOf(string[0]) === -1;
  });
}
console.log(
  uniqueString(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])
);
console.log(uniqueString(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));

//**** unique-char ****//
function uniqueChar(string) {
  const chars = string.split('').sort();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const prev = chars[i - 1];
    const next = chars[i + 1];
    if (current !== prev && current !== next) return current;
  }

  return '_';
}
console.log(uniqueChar('abdacabad'));
console.log(uniqueChar('abacabaabacaba'));
console.log(uniqueChar('abacabad'));
