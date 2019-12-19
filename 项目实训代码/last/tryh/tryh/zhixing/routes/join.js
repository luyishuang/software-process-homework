var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('join');
});

router.post("/add", function (req, res, next) {
  var username = req.body.username;
  var pwd = req.body.pwd;
  var aggrement = req.body.aggrement;
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("insert into login(username,pwd,imgpath,sex,birth,filetitle) values(?,?,?,?,?,?)", [username, pwd, null, null, null,null], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result);
      if (aggrement == "on") {
        var response = {
          message: "success"
        }
        res.json(response);
      }
      else {
        var response2 = {
          message: "wrong"
        }
        res.json(response2);
      }
    }
  })

})

//前端检查该用户是否注册过
router.post("/check", function (req, res, next) {
  var username = req.body.username;
  console.log(username);

  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("select * from login where username=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result.length);
      if (result.length===0) {
        var response={
          message:"success"
        }
        res.json(response);
        // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        // res.write("用户名符合要求");
        // res.end();
      }
      else {
        var response2={
          message:"wrong"
        }
        res.json(response2);
        // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        // res.write("该用户已注册");
        // res.end();
      }
    }
  })
})

module.exports = router;


