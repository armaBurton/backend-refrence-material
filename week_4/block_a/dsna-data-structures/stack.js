class Stack {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

  pop() {
    return this.#list.length ? this.#list.pop() : null;
  }

  peek() {
    return this.#list.at(-1);
  }

  get size() {
    return this.#list.length;
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.size);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.push('llama');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());

function reverse(array) {
  const stack = new Stack();

  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }

  const results = [];

  for (let i = 0; i < array.length; i++) {
    results[i] = stack.pop();
  }

  return results;
}

console.log(reverse([12, 3, 5, 7]));

const array = [];
array[0] = 'Hello';
array;
array[1] = 'World';
array;
array[5] = '!';
array;
