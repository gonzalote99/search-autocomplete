var search = document.querySelector('#search-bar');

search.compleet({
  maxResults: 4,
  tags: function (cb) {
    cb([
      'a',
      'ab',
      'abc',
      'abcd',
      'abcde',
      'abcdef'
    ])
  }

})