
/*
    bigarray.js 0.0.1
    2015-05-31

    By Ikrom, https://github.com/ikr0m
    License: MIT
 */

(function() {
  this.BigArray = (function() {
    var _name;

    _name = '';

    function BigArray(array, name, options) {
      var from, i, j, ref, rowCount, rowSize, to;
      rowSize = 100;
      _name = name;
      rowCount = Math.ceil(array.length / rowSize);
      for (i = j = 1, ref = rowCount; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        from = (i - 1) * rowSize;
        to = from + rowSize;
        localforage.setItem(name + ("-" + i), array.slice(from, +to + 1 || 9e9));
      }
    }

    BigArray.prototype.filter = function(fn) {
      var resultArr;
      resultArr = [];
      return localforage.iterate(function(value, key, iterationNumber) {
        if (key.indexOf(_name) === 0) {
          resultArr = resultArr.concat(_.filter(value, fn));
        }
        return void 0;
      }).then(function(result) {
        return resultArr;
      });
    };

    BigArray.prototype.filterBy = function() {};

    BigArray.prototype.findByValues = function() {};

    BigArray.prototype.where = function() {};

    BigArray.prototype.shuffle = function() {};

    return BigArray;

  })();

}).call(this);
