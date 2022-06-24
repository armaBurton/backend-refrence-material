class Queue {
  #list = [];
  #index = 0;

  // constructor() {
  //   this.list = [];
  //   this.index = 0;
  // }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    const item = this.#list[this.#index];
    if (!this.hasNext()) return null;
    this.#index++;
    return item;
  }

  hasNext() {
    return !!this.size;
  }

  get size() {
    return this.#list.length - this.#index;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.size);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
console.log(queue.size);
