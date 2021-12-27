// Koa 应用程序不是 HTTP 服务器的1对1展现。 可以将一个或多个 Koa 应用程序安装在一起以形成具有单个HTTP服务器的更大应用程序。

// 创建并返回 HTTP 服务器，将给定的参数传递给 Server#listen()。这些内容都记录在 nodejs.org.

// 以下是一个无作用的 Koa 应用程序被绑定到 3000 端口：
/**
 * const Koa = require('koa');
  const app = new Koa();
  app.listen(3000);
 */
//!!!!这里的 app.listen(...) 方法只是以下方法的语法糖:
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
//这意味着您可以将同一个应用程序同时作为 HTTP 和 HTTPS 或多个地址：
const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
app.callback()
// 返回适用于 http.createServer() 方法的回调函数来处理请求。你也可以使用此回调函数将 koa 应用程序挂载到 Connect/Express 应用程序中。