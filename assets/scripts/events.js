'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const ui = require('./ui')
const api = require('./api')

const addHandlers = function () {
  $('#get-api').on('click', onGetBooks)
}

// refresh books list
const onGetBooks = function () {
  // send request to server
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksError)
}

module.exports = {
  addHandlers: addHandlers,
  onGetBooks: onGetBooks
}
