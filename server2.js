const express = require('express');
const app = express();
const port = 9004;
require('dotenv').config();

// 读取环境变量
console.log(process.env.CURRENTUSER);
// 读取环境文件的环境变量
console.log(process.env.VERSION);
console.log(process.env.SCENE);
// 读取参数
console.log(process.argv[2]);
app.get('/', (req, res) => {
  const serer2 = 'test2';
  console.log('req----',req);
  res.send('Hi, i am testing');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});