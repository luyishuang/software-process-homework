var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");  //两个安装

// 发表动态
router.get("/add", function (req, res, next) {
  // var username=req.query.username;
  var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath from login where username=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result[0].imgpath)
      var response = {
        message: result[0].imgpath
      }
      res.json(response);
    }
  })
})

// 提交动态
router.post("/save", function (req, res, next) {
  Date.prototype.Format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "H+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  var time1 = new Date().Format("yyyy-MM-dd HH:mm:ss");
  var username = req.body.username;
  var content = req.body.content;
  var picpath = req.body.picpath;
  console.log(time1);
  // console.log(picpath);
  var aa=picpath.toString('base64');
  console.log(aa);
  console.log(req.body);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into dt(username,content,picpath,createtime) values(?,?,?,?)", [username, content, picpath,time1], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var response = {
        message: 'success'
      }
      res.json(response);
    }
  })
})

// 获取动态列表
router.get("/list", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select login.username,imgpath,content,createtime,picpath from dt,login where dt.username=login.username Order By createtime Desc", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result)
      var response = {
        message: result
      }
      res.json(response);
    }
  })
})

// 获取我的动态
router.get("/mine", function (req, res, next) {
  var username=req.query.username;
  // var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,content,createtime,picpath from login,dt where login.username=dt.username and dt.username=? Order By createtime Desc", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result)
      var response = {
        message: result
      }
      res.json(response);
    }
  })
})

// 获取动态详情
router.get("/mine", function (req, res, next) {
  var username=req.query.username;
  // var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,content,createtime,picpath from login,dt where login.username=dt.username and dt.username=? Order By createtime Desc", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result)
      var response = {
        message: result
      }
      res.json(response);
    }
  })
})
module.exports = router;