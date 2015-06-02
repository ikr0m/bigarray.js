###
    bigarray.js 0.0.1
    2015-05-31

    By Ikrom, https://github.com/ikr0m
    License: MIT
###

class @BigArray

  _name = ''


  _filter = (fn)->
    resultArr = []
    localforage.iterate((arrayValue, key) ->
      if key.indexOf(_name + '-') is 0
        resultArr = resultArr.concat(_.filter(arrayValue, fn))
      undefined
    )
    .then((result) ->
      resultArr
    )

  _filterBy = (attrName, attrValue) ->
    _filter((el) ->
      el[attrName] is attrValue
    )

  _findByValues = ->

  _where = ->

  _shuffle = (size)->

  # --------------------

  constructor: (array, name, options) ->
    # row is the key/value pair
    # rowSize is the length of the each array on the rows
    rowSize = 100 # TODO: get from options
    _name = name
    rowCount = Math.ceil(array.length / rowSize)

    for i in [1..rowCount]
      from = (i - 1) * rowSize
      to = from + rowSize
      localforage.setItem(name + "-#{i}", array[from..to])


  filter: _filter
  filterBy: _filterBy
  findByValues: _findByValues
  where: _where
  shuffle: _shuffle

