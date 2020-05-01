const express = require('express');
const path = require('path')
const app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static(path.join(__dirname, 'dist')))

//监听端口为3000
app.listen(8888, function () {

    console.log("server at 8888...");
})