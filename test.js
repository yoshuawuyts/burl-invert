/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var burl = require('burl');
var invert = require('./index');

/**
 * Test
 */

describe('invert', function() {
  it('should assert argument types', function() {
    invert.bind(invert, 123)
      .should.throw('burl-invert: links should be an object');

    invert.bind(invert, {})
      .should.not.throw('burl-invert: links should be an object');
  });

  it('should return an object', function() {
    invert(burl()).should.be.of.type('object');
  })
});

describe('set', function() {
  it('should assert input types', function() {
    var links = invert(burl());

    links.set.bind(invert, 123)
      .should.throw('burl-invert: val should be an object');

    links.set.bind(invert, {})
      .should.not.throw('burl-invert: val should be an object');
  });

  it('should invert set values', function() {
    var links = invert(burl());

    links.set({
      previous: '123',
      next: '456'
    });

    links._links._stash._prev.should.eql('456');
    links._links._stash._next.should.eql('123');
  });
});

describe('get', function() {
  it('should invert return values', function() {
    var links = invert(burl());

    links._links._stash._prev = '456';
    links._links._stash._next = '123';

    var nw = links.get();
    
    nw.previous.should.eql('123');
    nw.next.should.eql('456');
  });
});
