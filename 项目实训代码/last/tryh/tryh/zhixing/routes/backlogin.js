var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backlogin');
});

//登录
router.post("/add",function(req,res,next){
  var busername=req.body.busername;
  // console.log(username);
  var bpwd=req.body.bpwd;
  var con=mysql.createConnection(dbconfig);
  con.connect();  //连接上数据库了的一个方法

  con.query("select * from manager where busername=? and bpwd=?",[busername,bpwd],function(err,result){ //需要几个变量，写一个?,对应前边数据
    if(err){
      console.log(err);
    }
    else{
      if(result[0]==null){
        var response = {
          message: "wrong"
        }
       res.json(response);
      }
      else{
        var response2 = {
          message: "success"
        }
       res.json(response2);
      }
    }
  })
})

//下两个后台删除用户
router.get("/backlist", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from login", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var response3 = {
        message:result
      }
      res.json(response3);
    }
  })
})

router.post("/deluser", function (req, res, next) {
  var busername=req.body.busername;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from login where username=?", [busername], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var responese1={
        message:'success'
      }
      // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      // res.write("成功删除该用户");
      res.json(responese1);

    }
  })
})

//获取前台总用户数量bug
router.get("/mount", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from login where username is not null", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result.length);
      var response4 = {
        message:result.length
      }
     res.json(response4);
    }
  })
})

module.exports = router;
