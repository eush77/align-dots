[![npm](https://nodei.co/npm/align-dots.png)](https://nodei.co/npm/align-dots/)

# align-dots

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Align numeric data by decimal dot.

[travis]: https://travis-ci.org/eush77/align-dots
[travis-badge]: https://travis-ci.org/eush77/align-dots.svg
[david]: https://david-dm.org/eush77/align-dots
[david-badge]: https://david-dm.org/eush77/align-dots.png

## Example

```js
var align = require('align-dots');

align(['.25', '0.5', '1.005', '10'])
//=> ['  .25 ',
//    ' 0.5  ',
//    ' 1.005',
//    '10    ']);
```

## API

#### `align(data)`

Align array of numbers (strings), return array of aligned strings.

## Install

```
npm install align-dots
```

## License

MIT
