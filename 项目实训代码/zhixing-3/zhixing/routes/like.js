var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

router.post("/add", function (req, res, next) {
    var username=req.body.username;
    var filetitle=req.body.filetitle;
    console.log(filetitle);
  
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select (filetitle) from login where username=?",[username], function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        var title=result[0].filetitle;
        title = title  + filetitle + ",";
        console.log(title);
        con.query("update login set filetitle=? where username=?",[title,username],function(err,result){//更新数据库
          if (err) {
            console.log(err);
          }
          else {
            console.log(result);
            // res.write(result);
            // res.end();
            var response = {
              message:'success'
            }
           res.json(response);
          }
        })
      }
    })
  })
  
  router.get("/get", function (req, res, next) {
    var username=req.query.username;
    // var username=req.body.username;
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select (filetitle) from login where username=?",[username], function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log((result[0].filetitle).split(','));
        var response = {
          message:(result[0].filetitle).split(',')
        }
       res.json(response);
      }
    })
  })
  
  router.post("/del", function (req, res, next) {
    var username=req.body.username;
    var filetitle=req.body.filetitle;
    console.log(filetitle);
  
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select (filetitle) from login where username=?",[username], function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        var title=result[0].filetitle;
        var arr=title.split(",");
        for(var i=0;i<arr.length;i++){
            if(arr[i]==filetitle){
                arr.splice(i,1);
            }
        }
        title = arr.join(',');
        console.log(title);
        con.query("update login set filetitle=? where username=?",[title,username],function(err,result){//更新数据库
          if (err) {
            console.log(err);
          }
          else {
            console.log(result);
            var response = {
              message:'success'
            }
           res.json(response);
          }
        })
      }
    })
  })

module.exports = router;