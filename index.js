/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Expose `invert`.
 */

module.exports = invert;

/**
 * Invert.
 *
 * @param {Object} links
 *   @prop {String} previous
 *   @prop {String} next
 * @return {Object}
 * @api public
 */

function invert(links) {
  assert.equal(typeof links, 'object', 'burl-invert: links should be an object');
  
  return {
    previous: links.next,
    next: links.previous
  };
}
