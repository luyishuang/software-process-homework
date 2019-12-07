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
  console.log(username,pwd,aggrement);
  var con = mysql.createConnection(dbconfig);
  con.connect();

  // con.query("select * from login where username=?", [username], function (err, result) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
      con.query("insert into login(username,pwd,imgpath,sex,birth) values(?,?,?,?,?)", [username, pwd,null,null,null], function (err, result) {
        if (err) {
          console.log(err);
        }
        else {
          // console.log(result);
          if (aggrement == "on") {
            var responese={
              message:"success"
            }
            res.json(responese);
          }
          else {
            var responese={
              message:"请勾选用户协议"
            }
            res.json(responese);
            // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
            // res.write("请勾选用户协议");
            // res.end();
          }
        }
      })
    // }
  // })
})

//前端检查该用户是否注册过
router.post("/check", function (req, res, next) {
  var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("select * from login where username=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      if (result[0] == null) {
        var responese={
          message:"success"
        }
        res.json(responese);
        // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        // res.write("用户名符合要求");
        // res.end();
      }
      else {
        var responese={
          message:"wrong"
        }
        res.json(responese);
        // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        // res.write("该用户已注册");
        // res.end();
      }
    }
  })
})

// router.get("/list", function (req, res, next) {
//   var con = mysql.createConnection(dbconfig);
//   con.connect();
//   con.query("select * from login", function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.render("list", { chapterList: result });
//     }
//   })
// })

// router.get("/del", function (req, res, next) {
//   var chapterId = req.query.chapterid;
//   var con = mysql.createConnection(dbconfig);
//   con.connect();
//   con.query("delete from chapter where username=?", [chapterId], function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.end("delete success")
//     }
//   })
// })

// update chapters set content=? where chapterid=?

module.exports = router;


