
/*
    bigarray.js 0.0.1
    2015-05-31

    By Ikrom, https://github.com/ikr0m
    License: MIT
 */

(function() {
  this.BigArray = (function() {
    var _filter, _filterBy, _findByValues, _name, _shuffle, _where;

    _name = '';

    _filter = function(fn) {
      var resultArr;
      resultArr = [];
      return localforage.iterate(function(arrayValue, key) {
        if (key.indexOf(_name + '-') === 0) {
          resultArr = resultArr.concat(_.filter(arrayValue, fn));
        }
        return void 0;
      }).then(function(result) {
        return resultArr;
      });
    };

    _filterBy = function(attrName, attrValue) {};

    _findByValues = function() {};

    _where = function() {};

    _shuffle = function(size) {};

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

    BigArray.prototype.filter = _filter;

    BigArray.prototype.filterBy = _filterBy;

    BigArray.prototype.findByValues = _findByValues;

    BigArray.prototype.where = _where;

    BigArray.prototype.shuffle = _shuffle;

    return BigArray;

  })();

}).call(this);
