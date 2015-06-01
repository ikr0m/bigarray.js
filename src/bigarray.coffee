###
    bigarray.js 0.0.1
    2015-05-31

    By Ikrom, https://github.com/ikr0m
    License: MIT
###

class BigArray

  constructor: (array, name, options) ->
    number = 10 # get from options
    rowSize = Math.ceil(array.length / number)
    for i in [1..number]
      from = (i - 1) * rowSize
      to = from + rowSize
      localforage.setItem(name + '-#{i}', array[from..to])



  filter: ->

  filterBy: ->

  findByValues: ->

  where: ->

