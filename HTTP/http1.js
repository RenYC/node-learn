/**
 * 搭建 HTTP 服务器
 * 这是一个简单的 HTTP web 服务器的示例：
 */
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello node");
});
server.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`);
});
