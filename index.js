'use strict';

var stringAlign = require('string-align');


module.exports = function (data, opts) {
  opts = opts || {};
  opts.forceDots = opts.forceDots || false;

  data = data.map(function (item) {
    var parts = String(item).split('.');
    if (parts.length > 2) {
      throw Error('Multiple dots for item: ' + JSON.stringify(item));
    }
    if (parts.length == 1) {
      parts.push(opts.forceDots ? '' : null);
    }
    return {
      left: parts[0],
      right: parts[1]
    };
  });

  var info = data.reduce(function (acc, item) {
    acc.leftWidth = Math.max(acc.leftWidth, item.left.length);
    acc.rightWidth = Math.max(acc.rightWidth, (item.right || '').length);
    acc.hasDots = acc.hasDots || item.right != null;
    return acc;
  }, { leftWidth: 0, rightWidth: 0 });

  return data.map(function (item) {
    var left = stringAlign(item.left, info.leftWidth, 'right');
    if (info.hasDots) {
      var right = stringAlign(item.right || '', info.rightWidth, 'left');
      return left + (item.right != null ? '.' : ' ') + right;
    }
    else {
      return left;
    }
  });
};
