var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('manager');
});

//update
router.post("/change", function (req, res, next) {
  var busername = req.body.busername;
  var realname = req.body.realname;
  var sex = req.body.sex;
  var tel = req.body.tel;
  var mail = req.body.mail;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update manager set realname=?,sex=?,tel=?,mail=? where busername=?", [realname, sex, tel, mail,busername], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write("修改成功");
      res.end();
    }
  })
})


router.get("/list", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from manager", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var response = {
        message: "success",
        data:result
      }
      res.json(response);
      // console.log(result);
      // res.write(result);
      // res.end();
    }
  })
})

router.post("/delmanager", function (req, res, next) {
  var busername = req.body.busername;
  console.log(busername);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from manager where busername=?", [busername], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      // res.write("成功删除该管理员");
      // res.end();
      con.query("select * from manager", function (err, result) {
        if (err) {
          console.log(err);
        }
        else {
          var response = {
            message: "success",
            data:result
          }
          res.json(response);
          // console.log(result);
          // res.write(result);
          // res.end();
        }
      })
    }
  })
})

// update chapters set content=? where chapterid=?

module.exports = router;