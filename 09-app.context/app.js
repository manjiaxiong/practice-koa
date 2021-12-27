/**
 * app.context 是从其创建 ctx 的原型。您可以通过编辑 app.context 为 ctx 添加其他属性。这对于将 ctx 添加到整个应用程序中使用的属性或方法非常有用，这可能会更加有效（不需要中间件）和/或 更简单（更少的 require()），而更多地依赖于ctx，这可以被认为是一种反模式。

   例如，要从 ctx 添加对数据库的引用：
 */
   app.context.db = db();

   app.use(async ctx => {
     console.log(ctx.db);
   });