'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const showBooksTemplate = require('./templates/books.handlebars')

// refresh books list
const getBooksSuccess = function (response) {
  console.log('response.books is ', response.books)
  const showBooksHtml = showBooksTemplate({ books: response.books })
        $('#display-field').html(showBooksHtml)
}

const getBooksError = function (error) {
  console.log('error fetching books list from server ')
  console.log('error is: ', error)
}

module.exports = {
  getBooksSuccess: getBooksSuccess,
  getBooksError: getBooksError
}
