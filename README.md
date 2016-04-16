# Queue

[![Build Status](https://travis-ci.org/SWoskowiak/jsQueue.svg?branch=master)](https://travis-ci.org/SWoskowiak/jsQueue)

[![Coverage Status](https://coveralls.io/repos/github/SWoskowiak/jsQueue/badge.svg?branch=master)](https://coveralls.io/github/SWoskowiak/jsQueue?branch=master)

Queue data structure implementation in javascript.

While you can mimic queue(FIFO) behavior via arrays like so:

```Javascript

  const arr = [];
  // "queue" some data up
  arr.push(1);
  arr.push(2);
  arr.push(3);

  console.log(arr.shift()) // 1

```

This operation causes the array indices to be recalculated resulting in O(n)
time for each dequeue made (push is 0(1) time operation).

## Alternative

To avoid O(n) dequeue times we can instead use a hash table and keep track of
of head and tail indexes of the table. This allows enqueue and dequeue to
operate in O(1) time!

Check out index.js to see a very simple implementation of this behavior.


## Install

```Javascript

  npm install jsQueue

```

## Usage

```Javascript

  const q = new Queue();

  // NOTE: enqueue returns the queue object so we can chain enqueue methods
  q.enqueue('some').enqueue('test').enqueue('data');

  console.log(q.dequeue()) // 'some'
  console.log(q.dequeue()) // 'test'
  console.log(q.dequeue()) // 'data'
  console.log(q.dequeue()) // false

  console.log(q.size) // 0

  q.enqueue('something');

  // peek lets us check whats next without dequeuing it
  console.log(q.peek()) // 'something'

  q.enqueue('some').enqueue('more').enqueue.('data');

  console.log(q.size) // 4

```
