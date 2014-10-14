/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Prototype.
 */

var invert = Invert.prototype;

/**
 * Expose `invert`.
 */

module.exports = Invert;

/**
 * Invert.
 *
 * @param {Object} links
 *   @prop {String} previous
 *   @prop {String} next
 * @return {Object}
 * @api public
 */

function Invert(links) {
  if (!(this instanceof Invert)) return new Invert(links);

  assert.equal(typeof links, 'object', 'burl-invert: links should be an object');
  this._links = links;
  return this;
}

/**
 * Set.
 *
 * @param {Object} val
 * @api public
 */

invert.set = function(val) {
  assert.equal(typeof val, 'object', 'burl-invert: val should be an object');

  this._links.set({
    previous: val.next || val._next,
    next: val.previous || val._previous
  });
};

/**
 * Get.
 *
 * @return {Object}
 * @api public
 */

invert.get = function() {
  var nw = this._links.get();

  return {
    previous: nw.next,
    next: nw.previous
  };
};
