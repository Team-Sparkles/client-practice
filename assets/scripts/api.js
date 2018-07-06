'use strict'

const getBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books',
  })
}
