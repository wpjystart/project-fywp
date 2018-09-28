const express = require("express");   /*引入模块*/
const webserver = express();
const Index=require("./index");     /*引入的json文件*/
const MYdetails=require("./mydetails");


// var app = express();
// // // 跨域设置
// // app.all('*', function (req, res, next) {
// //   if (req.path !== "/" && !req.path.includes(".")) {
// //     res.header('"Access-Control-Allow-Credentials", true');
// //     res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
// //     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
// //     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// //     res.header("Content-Type", "application/json;charset=utf-8");
// //   }
// //   next();
// //
// // });
webserver.use("/api/index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Index)
});

webserver.use("/api/mydetails",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(MYdetails)
});

webserver.listen(3001,()=>{
  console.log("api server is ready on port 3001")
});
