const express = require("express");   /*引入模块*/
const webserver = express();
const Index=require("./index");     /*引入的json文件*/

webserver.use("/api/index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Index)
});

webserver.listen(3000,()=>{
  console.log("api server is ready on port 3000")
});
