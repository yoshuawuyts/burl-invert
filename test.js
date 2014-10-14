/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

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

  it('should invert links', function() {
    var nw = invert({
      previous: '123',
      next: '456'
    });

    nw.previous.should.eql('456');
    nw.next.should.eql('123');
  });
});
