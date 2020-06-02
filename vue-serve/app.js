const koa=require("koa")

const app= new koa()

const static = require('koa-static');

const home = static('./dist');

app.use(home)

app.listen(80)