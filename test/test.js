'use strict';

var align = require('..');

var test = require('tape');


test(function (t) {
  t.deepEqual(align(['.25', '0.5', '1.005', '10']),
              ['  .25 ',
               ' 0.5  ',
               ' 1.005',
               '10    ']);
  t.end();
});
