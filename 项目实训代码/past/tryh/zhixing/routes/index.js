var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/userinfo", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select imgpath,username from users", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result);
      res.write(result);
      res.end();
    }
  })
})

router.post("/jdlist", function (req, res, next) {
  var title=req.query.title;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ?",[title], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result);
      res.write(result);
      res.end();
    }
  })
})
module.exports = router;



