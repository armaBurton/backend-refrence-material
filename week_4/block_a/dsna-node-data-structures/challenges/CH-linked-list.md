Linked List
---

A LinkedList is a linear data structure, however elements are not stored in contiguous locations like arrays, they are linked with each other using pointers. Each element of the LinkedList has the reference(address/pointer) to the next element of the LinkedList.

## Challenge

Implement `LinkedListNode` as a data structure (a `class`) that has:
- `value` property represented by this node. It should be initialized via the constructor
- `next` property (`null` if empty) that points to the next node
- `add(node)` method that takes a `node` of type `LinkedListNode`. If current node already has `next`, it should use recursion to delegate to the `next` node's `add(node)` method.
- `getList()` method that returns a string with values in order. Should use recursion to delegate.


## Test Cases

```js
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
```