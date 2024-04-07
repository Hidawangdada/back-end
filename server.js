const express = require('express');
const app = express();
const port = 9003;
// 读取环境变量
console.log(process.env.CURRENTUSER);
// 读取参数
console.log(process.argv[2]);

app.get('/', (req, res) => {
    const name = "test1";
    console.log(req);
  res.send(`Hello World!`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});