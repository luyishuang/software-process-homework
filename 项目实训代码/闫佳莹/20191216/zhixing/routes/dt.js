var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

// 发表动态
router.get("/add", function (req, res, next) {
  // var username=req.query.username;
  var username=req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath from login where username=?",[username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result[0].imgpath)
      var response = {
        message:result[0].imgpath
      }
     res.json(response);
    }
  })
})

// 提交动态
router.post("/save",function(req,res,next){
  var username=req.body.username;
  var content=req.body.content;
  var picpath=req.body.picpath;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into dt(username,content,picpath) values(?,?,?,?)",[username,content,picpath],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      var response = {
        message:'success'
      }
     res.json(response);
    }
  })
})

// 获取动态列表
router.get("/list", function (req, res, next) {
  // var username=req.query.username;
  // var username=req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,content,createtime from login,dt where login.username=dt.username and dt.username=?",[username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result[0])
      var response = {
        message:result[0]
      }
     res.json(response);
    }
  })
})

// 获取动态详情
router.get("/list", function (req, res, next) {
  // var username=req.query.username;
  var username=req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,content,createtime,picpath from login,dt where login.username=dt.username and dt.username=?",[username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result[0])
      var response = {
        message:result[0]
      }
     res.json(response);
    }
  })
})

module.exports = router;