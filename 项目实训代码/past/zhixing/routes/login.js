var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post("/add",function(req,res,next){
  var username=req.body.username;
  // console.log(username);
  var pwd=req.body.pwd;
  var con=mysql.createConnection(dbconfig);
  con.connect();  //连接上数据库了的一个方法

  con.query("select * from login where username=? and pwd=?",[username,pwd],function(err,result){ //需要几个变量，写一个?,对应前边数据
    if(err){
      console.log(err);
    }
    else{
      if(result[0]==null){
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("登录失败");
        res.end();
      }
      else{
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("登录成功");
        res.end();
      }
    }
  })
})


module.exports = router;