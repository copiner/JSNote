var express = require('express');
var fs = require('fs');
var router = express.Router();

console.log(fs);
//var db = require("/database/teacher.json");
//console.log(db[0])

fs.readFile("routes/index.js", function (err, data){//  routes/index.js  路径怎么这样why
  console.log(data);
})

router.post('/tinfos', function(req, res, next) {
  var t_name = req.body.name;
  var t_age = req.body.age;
  fs.readFile("db/teachers.json", function (err, data){
    //类似从数据库读取数据,根据条件处理返回数据到前端
    var obj = JSON.parse(data); //data为buffer格式，转化为json对象
    var pos = null;
    for(var i=0; i< obj.length; i++){
      if(obj[i].name == t_name && obj[i].age == t_age){
        pos = i;
      }
    }
    var t_class = obj[pos].class || "no found";
    var s_count = obj[pos].studentCount || 0;
    var t_college = obj[pos].college || "no info";
    var info = {
      name: t_name,
      name: t_name,
      class: t_class,
      count: s_count,
      college: t_college
    }
    res.send(info);
  })

});


router.get('/', function(req, res, next) {
  res.render('teachers');
});


module.exports = router;
