var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

router.get('/', function(req, res, next) {//get我的页面
  res.render('my');
});

router.post("/add",function(req,res,next){
  var imgpath=req.body.imgpath;
  var username=req.body.username;
  var sex=req.body.sex;
  var birth=req.body.birth;
  console.log(username,birth,sex);
  var con=mysql.createConnection(dbconfig);
  // console.log(username, imgpath, sex, birth, oldusername);
  con.connect();
  // update chapters set content=? where chapterid=?  更新，注册创建
  // insert into users(username,imgpath,sex,birth) values(?,?,?,?)
  con.query("update login set imgpath=?,sex=?,birth=? where username=?",[imgpath,sex,birth,username],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("success");
    }
  })
})


module.exports = router;