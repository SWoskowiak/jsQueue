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
  });

});
