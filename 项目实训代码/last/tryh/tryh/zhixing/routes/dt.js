var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");  //两个安装
var formidable=require('formidable');
var fs = require("fs");
var path=require("path");

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
router.post('/pic',(req,res,next)=>{
  var routes =path.resolve(__dirname, '..');
  var fp = path.join(routes,'/public/images/dtimg')
  console.log(fp);
//formidate
  var form=new formidable.IncomingForm();
  form.parse(req,(err,fields,files)=>{
    console.log(files);

    for (const key in files) {
       var fc = fs.readFileSync(files[key].path);
      var patha=path.join(fp,'a'+key+'.png')
      // var patha=path.join(__dirname,'a'+key+'.png')
      console.log(fc);
      fs.writeFileSync(patha,fc);
      
    }
  })
  res.json({
    success:1
  })
})

router.post("/save", function (req, res, next) {
  // var timestamp = new Date().getTime();
  var username = req.body.username;
  var content = req.body.content;
  var picpath = req.body.picpath;
  var timestamp = new Date().getTime();
  var str = timestamp+'';
  str=str.slice(0,10)+'000';
  var time=str-0;
  console.log(time);
  // console.log(timestamp.splice(0,10));
  console.log(picpath);
  var aa = 'picpath';


  

  // var aa=picpath.toString('base64');
  // console.log(aa);

  // console.log(req.body);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into dt(username,content,picpath,createtime) values(?,?,?,?)", [username, content, aa, time], function (err, result) {
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
      for (var i = 0; i < result.length; i++) {
        var time=new Date(parseInt(result[i].createtime));
        result[i].createtime=time.toLocaleDateString().replace(/\//g, "-") + " " + time.toTimeString().substr(0, 8);
      }
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
  var username = req.query.username;
  // var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,content,createtime,picpath from login,dt where login.username=dt.username and dt.username=? Order By createtime Desc", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result)
      for (var i = 0; i < result.length; i++) {
        var time=new Date(parseInt(result[i].createtime));
        result[i].createtime=time.toLocaleDateString().replace(/\//g, "-") + " " + time.toTimeString().substr(0, 8);
      }
      var response = {
        message: result
      }
      res.json(response);
    }
  })
})

// 获取动态详情
router.get("/mine", function (req, res, next) {
  var username = req.query.username;
  // var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,content,createtime,picpath from login,dt where login.username=dt.username and dt.username=? Order By createtime Desc", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      for (var i = 0; i < result.length; i++) {
        var time=new Date(parseInt(result[i].createtime));
        result[i].createtime=time.toLocaleDateString().replace(/\//g, "-") + " " + time.toTimeString().substr(0, 8);
      }
      console.log(result)
      var response = {
        message: result
      }
      res.json(response);
    }
  })
})
module.exports = router;
