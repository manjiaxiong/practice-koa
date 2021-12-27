const Koa=require('koa');
let app = new Koa();

app.use( async ( ctx ) => {
  
  if ( ctx.url === '/index' ) {
    ctx.cookies.set(
      'cid', 
      'ddddd',    //可替换为token
      {}
    )
    console.log('cookie11111', ctx.cookies.get("cid"));
    ctx.body = 'cookie is ok'
  } else {
  	console.log('cookie', ctx.cookies.get('cid'));
    ctx.body = ctx.cookies.get('cid')
  }
 
})
app.listen(3000,'127.0.0.1',()=>{
    console.log('running in http://127.0.0.1:3000')
})