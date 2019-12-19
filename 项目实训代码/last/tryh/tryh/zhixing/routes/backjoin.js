var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('backjoin');
});

router.post("/add", function (req, res, next) {
  var username = req.body.busername;
  var pwd = req.body.bpwd;
  // console.log(req);
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("insert into manager(busername,bpwd,realname,sex,tel,mail) values(?,?,?,?,?,?)",[username, pwd,null,null,null,null], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var response = {
        message: "success"
      }
      res.json(response);
    }
  })
})

// 判断该用户是否已经注册
router.post("/check", function (req, res, next) {
  var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("select * from manager where username=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      if (result[0] == null) {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("用户名符合要求");
        res.end();
      }
      else {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("该用户已注册");
        res.end();
      }
    }
  })
})

module.exports = router;


