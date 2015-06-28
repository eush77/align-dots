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
  t.deepEqual(align([1, 4, 16, 256]),
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


test('opts.forceDots', function (t) {
  t.deepEqual(align(['.25', '0.5', '1.005', '10'], { forceDots: true }),
              ['  .25 ',
               ' 0.5  ',
               ' 1.005',
               '10.   ']);
  t.deepEqual(align(['0', '10.', '.5', '1.', '1.50'], { forceDots: true }),
              [' 0.  ',
               '10.  ',
               '  .5 ',
               ' 1.  ',
               ' 1.50']);
  t.deepEqual(align(['.1', '.2', '.10'], { forceDots: true }),
              ['.1 ',
               '.2 ',
               '.10']);
  t.deepEqual(align(['0.1', '.2', '.10'], { forceDots: true }),
              ['0.1 ',
               ' .2 ',
               ' .10']);
  t.deepEqual(align([1, 4, 16, 256], { forceDots: true }),
              ['  1',
               '  4',
               ' 16',
               '256']);
  t.deepEqual(align(['1', '4.', '16', '256'], { forceDots: true }),
              ['  1.',
               '  4.',
               ' 16.',
               '256.']);
  t.end();
});


test('opts.char', function (t) {
  t.deepEqual(align(['.25', '0.5', '1.005', '10'], { char: '~' }),
              ['~~.25~',
               '~0.5~~',
               '~1.005',
               '10~~~~']);
  t.deepEqual(align(['0', '10.', '.5', '1.', '1.50'], { char: '~' }),
              ['~0~~~',
               '10.~~',
               '~~.5~',
               '~1.~~',
               '~1.50']);
  t.deepEqual(align(['.1', '.2', '.10'], { char: '~' }),
              ['.1~',
               '.2~',
               '.10']);
  t.deepEqual(align(['0.1', '.2', '.10'], { char: '~' }),
              ['0.1~',
               '~.2~',
               '~.10']);
  t.deepEqual(align([1, 4, 16, 256], { char: '~' }),
              ['~~1',
               '~~4',
               '~16',
               '256']);
  t.deepEqual(align(['1', '4.', '16', '256'], { char: '~' }),
              ['~~1~',
               '~~4.',
               '~16~',
               '256~']);
  t.end();
});


test('opts.zeroes', function (t) {
  t.deepEqual(align(['.25', '0.5', '1.005', '10'], { zeroes: true }),
              ['00.250',
               '00.500',
               '01.005',
               '10.000']);
  t.deepEqual(align(['0', '10.', '.5', '1.', '1.50'], { zeroes: true }),
              ['00.00',
               '10.00',
               '00.50',
               '01.00',
               '01.50']);
  t.deepEqual(align(['.1', '.2', '.10'], { zeroes: true }),
              ['.10',
               '.20',
               '.10']);
  t.deepEqual(align(['0.1', '.2', '.10'], { zeroes: true }),
              ['0.10',
               '0.20',
               '0.10']);
  t.deepEqual(align([1, 4, 16, 256], { zeroes: true }),
              ['001',
               '004',
               '016',
               '256']);
  t.deepEqual(align(['1', '4.', '16', '256'], { zeroes: true }),
              ['001.',
               '004.',
               '016.',
               '256.']);
  t.end();
});
