'use strict'

const getBooks = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library.herokuapp.com/books'
  })
}

module.exports = {
  getBooks: getBooks
}
