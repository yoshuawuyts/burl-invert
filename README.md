# burl-invert
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Invert the `previous` and `next` `_link` values. Makes sure the correct
comparison is executed within `burl`, but the returned values are inverted.

## Installation
```bash
npm install burl-invert
```

## Usage
```js
var invert = require('burl-invert');
var burl = require('burl');

var links = burl();
links.set(invert({
  previous: 'mysite.com/?from=7654321',
  next: 'mysite.com/?until=1234567'
}));

invert(links.get());
// => {
//   previous: 'mysite.com/?from=7654321',
//   next: 'mysite.com/?until=1234567'
// }
```

## See also
- [burl][burl]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/burl-invert.svg?style=flat-square
[npm-url]: https://npmjs.org/package/burl-invert
[travis-image]: https://img.shields.io/travis/yoshuawuyts/burl-invert.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/burl-invert
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/burl-invert.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/burl-invert?branch=master
[downloads-image]: http://img.shields.io/npm/dm/burl-invert.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/burl-invert

[burl]: https://github.com/yoshuawuyts/burl
