const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

//1ra parte
// app.use(async ctx => {
//     ctx.body = 'asdasd'
// })

app.use(koaBody());

let books = require('./books.js');

app.use(books.routes());

app.listen(3000);