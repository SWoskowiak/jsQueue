'use strict';

const expect = require('chai').expect,
  Queue = require('../index');

describe('Queue', function () {
  let queue;

  describe('Methods', () => {

    beforeEach(() => {
      queue = new Queue();
    });

    it ('Queues data', () => {
      expect(queue.enqueue('test')).to.have.property('size').eql(1);
      expect(queue.enqueue('more')).to.have.property('size').eql(2);
    });

    it ('Dequeues data and returns false when empty', () => {
      queue.enqueue('some').enqueue('test').enqueue('data');

      expect(queue.dequeue()).to.equal('some');
      expect(queue.dequeue()).to.equal('test');
      expect(queue.dequeue()).to.equal('data');
      expect(queue.dequeue()).to.be.false;
      expect(queue).to.have.property('size').eql(0);
    });

    it ('Peeks into queue', () => {
      queue.enqueue('some').enqueue('test').enqueue('data');

      expect(queue.peek()).to.equal('some');
    });

    it ('Clears queue of elements', () => {
      queue.enqueue('some').enqueue('test').enqueue('data');

      expect(queue.clear()).to.have.property('size').eql(0);
    });

    it ('Runs through a basic set of operations without fail', () => {
      queue.enqueue('some').enqueue('test').enqueue('data').clear().enqueue('hello');

      expect(queue.dequeue()).to.equal('hello');
      expect(queue).to.have.property('size').eql(0);
    });
  });

});
