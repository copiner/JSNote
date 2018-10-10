var express = require('express');
var router = express.Router();
var fs = require('fs');

// fs.readFile("database/students.json", function (err, data){
//   var obj = JSON.parse(data)
//   console.log(obj[id-1]);//得到json格式
// })

router.get('/', function(req, res, next) {
  //res.send(db);
});

router.get('/sList', function(req, res, next) {
  res.render('student');
});

module.exports = router;
