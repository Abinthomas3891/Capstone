// const express = require("express");
// const app = express();
// const PORT = 6000;
// app.use(express.static("./public"));
// const proxy = require("http-proxy-middleware");
// const apiProxyTarget = process.env.API_PROXY_TARGET;
// if (apiProxyTarget) {
//   app.use("/graphql", proxy({ target: apiProxyTarget }));
//   console.log("graph");
// }

// app.listen(PORT, function () {
//   console.log("App started on port 6000");
// });
const express=require('express');
const app=express();
app.use(express.static('public'));

app.listen(3001,()=>{
    console.log("app started on 3001");
});