'use strict';

// Simple queue data struture
// Javascript arrays can mimic the exact behavior via push and shift but come
// with performance overhead of resizing array after each shift operation. This Queue
// therefore will operate in O(1) time instead of O(N) from resizing.
class Queue {

  constructor() {
    this.newIndex = 0;
    this.oldIndex = 0;
    this.storage = {};
  }

  // Queue up some data
  enqueue(data) {
    this.storage[this.newIndex] = data;
    this.newIndex++;

    return this;
  }

  // Dequeue some data
  dequeue() {
    let temp;

    if (this.oldIndex !== this.newIndex) {
      temp = this.storage[this.oldIndex];
      delete this.storage[this.oldIndex];
      this.oldIndex++;

      return temp;
    } else {
      return false;
    }
  }

  // Whats the next value to
  peek() {
    return this.storage[this.oldIndex];
  }

  // Get the size of the array
  get size() {
    return this.newIndex - this.oldIndex;
  }
}

module.exports = Queue;
