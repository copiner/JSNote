
//var fetch = require('fetch-jsonp');

// http://www.html5online.com.cn/articles/students.json
fetch('http://localhost:3000')
  .then(function(response) {
     return response.json()
   }).then(function(json) {
     console.log('parsed json', json)
   }).catch(function(ex) {
     console.log('parsing failed', ex)
   })
