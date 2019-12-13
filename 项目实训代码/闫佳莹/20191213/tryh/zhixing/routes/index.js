var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");
var fs = require("fs");
var path = require("path");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取城市景区数据
router.get("/jq", function (req, res, next) {
  // var city=req.query.city;
  var city=req.body.city;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select (title,etitle,imgpath) from ?",[city], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var response = {
        message:result
      }
      res.json(response);
    }
  })
})

// 景点列表
router.get("/jdlist", function (req, res, next) {
  var city=req.body.city;
  var title=req.body.title;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select jingdian from city where title=?",[city,title] function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      var response = {
        message:result[0].jingdian
        // message:JSON.stringify(result[0].jingdian)
      }
     res.json(response);
    }
  })
})

// 我的页面显示头像
router.get("/getmine", function (req, res, next) {
  // var username=req.query.username;
  var username=req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select (imgpath) from login where username=?",[username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(result.length);
      var response = {
        message:result.length
      }
     res.json(response);
    }
  })
})












/**
 * 文章推送
 */
router.get('/article',(req,res,next)=>{
  var artid = req.query.artid;
  var file = fs.readFileSync(path.join(__dirname,'/json/article.json'));
  var jobj=JSON.parse(file);
  // console.log(JSON.parse(file));
  for(var i=0;i<jobj.length;i++){
    if(jobj[i].artid === artid){
      break;
    }
  }
  if(i>=jobj.length){
    res.end("err");
  }else{
    // console.log(jobj[i]);
    console.log(jobj[i].photo.picname);
    res.writeHead(200,{"content-type":"text/plain;charset=utf8"});
    res.write(JSON.stringify(jobj[i]));
    res.end();   
  }
  // res.end("success");
})

router.get("/images/:name",(req,res,next)=>{
  var name = req.params.name;
  var piccontent=fs.readFileSync("../../images/"+name+'.jpg');
  res.writeHead(200,{"content-type":"image/jpg"});
  res.write(piccontent);
  res.end();
})

/**
* 景点详情介绍文字
*/
router.get('/jdcontent',(req,res,next)=>{
// var title = req.params.jdtitle;
title = req.query.jdtitle;
console.log(title);
var fp = path.join(__dirname,'/json/jdcontent.json');
var jdcontent = fs.readFileSync(fp);
var jsonstr = JSON.parse(jdcontent);
for(var i=0;i<jsonstr.length;i++){
  if(jsonstr[i].jdtitle === title){
    
    break;
  }
}
// console.log(jdcontent[i]);
console.log(jsonstr[i]);
res.writeHead(200,{'content-type':'text/html;charset=utf8'});
res.write(JSON.stringify(jsonstr[i]));
res.end();
// res.end(JSON.stringify(jsonstr[i])); 
})
router.get('/public/images/icon/:name',(req,res,next)=>{
var name = req.params.name;
var con = fs.createReadStream('/images/icon/'+name);
con.pipe(res);
})



/**
* 发表动态
*/
router.get('/form',(req,res,next)=>{
res.render('postusername copy');
})
router.post('/savedt',(req,res,next)=>{
var username = req.body.username;
var content =req.body.content;
var createtime = req.body.createtime;
console.log(username,content,createtime);
var fp = path.join(__dirname,'/json/userdt.json');
var co = fs.readFileSync(fp);
var jc = JSON.parse(co);
let list = jc;
  var newdt={};
  newdt.username = username;
  newdt.content=content;
  newdt.introduce = content.slice(0,12);
  newdt.createtime=createtime;
  list.push(newdt);

fs.writeFile(fp,JSON.stringify(list,null,5),(err,result)=>{
  if(err){
    res.end('wrong');
  }
  else{
    res.end('success');
  }
});
})
/**
* 获取动态列表
*/
router.get('/dtlist',(req,res,next)=>{
var filepath = path.join(__dirname,"/json/userdt.json");
var filecontent = fs.readFileSync(filepath);
var jsonobj=JSON.parse(filecontent);
var jsonstr = JSON.stringify(jsonobj);
res.writeHead(200,{"content-type":"text/plain;charset=utf8"});
res.write(jsonstr);
res.end(); 
})



/**
* 社区话题列表
*/
router.get('/topiclist',(req,res,next)=>{
var filepath = path.join(__dirname,"/json/topiclist.json");
var filecontent = fs.readFileSync(filepath);
var jsonobj = JSON.parse(filecontent);
var jsonstr = JSON.stringify(jsonobj);
res.writeHead(200,{"content-type":"text/plain;charset=utf8"});
res.write(jsonstr);
res.end(); 
})
/**
* 话题管理
*/
router.get('/backtopiclist',(req,res,next)=>{
var filepath = path.join(__dirname,"/json/topiclist.json");
fs.readFile(filepath,(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    var jsonobj=JSON.parse(data);
    var jsonstr = JSON.stringify(jsonobj);
    res.writeHead(200,{'content-type':'text/plain;charset=utf8'});
    res.write(JSON.stringify(jsonobj));
    res.end();
  }
})
})

/**
* 删除话题
*/
router.get("/deltopic",(req,res,next)=>{
var tpname = req.query.tpname;
var id = req.query.id;
var filepath = path.join(__dirname,"/json/topiclist.json");
    var topiclist = require("./json/topiclist.json");
    console.log(topiclist);
    for(var i=0;i<topiclist.length;i++){
      if(topiclist[i].tpname === tpname){
        var list = [...topiclist[i].list];
        console.log(topiclist[i].list);
        break;
      }
    }
    if(i>=topiclist.length){
      let msg={
        msg:"wrong"
      }
      res.end(JSON.stringify(msg));
    }else{
      for(var j=0;j<list.length;j++){
        if(list[j].id === id){
          list.splice(j,1);
          topiclist[i].list=[...list];
          console.log(topiclist[i].list);
          fs.writeFile(filepath,JSON.stringify(topiclist,null,5),(err,result)=>{
            if(err){
              let msg2={
                msg:"wrong",
                topic:topiclist
              }
              res.end(JSON.stringify(msg2));
            }
            else{
              let msg3={
                msg:"success"
              }
              res.end(JSON.stringify(msg3));
            }
          });
        }
      }
    }
  }
)


module.exports = router;



