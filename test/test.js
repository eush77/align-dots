'use strict';

var align = require('..');

var test = require('tape');


test(function (t) {
  t.deepEqual(align(['.25', '0.5', '1.005', '10']),
              ['  .25 ',
               ' 0.5  ',
               ' 1.005',
               '10    ']);
  t.deepEqual(align(['0', '10.', '.5', '1.', '1.50']),
              [' 0   ',
               '10.  ',
               '  .5 ',
               ' 1.  ',
               ' 1.50']);
  t.deepEqual(align(['.1', '.2', '.10']),
              ['.1 ',
               '.2 ',
               '.10']);
  t.deepEqual(align(['0.1', '.2', '.10']),
              ['0.1 ',
               ' .2 ',
               ' .10']);
  t.deepEqual(align(['1', '4', '16', '256']),
              ['  1',
               '  4',
               ' 16',
               '256']);
  t.deepEqual(align(['1', '4.', '16', '256']),
              ['  1 ',
               '  4.',
               ' 16 ',
               '256 ']);
  t.end();
});
