'use strict';
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const router = require('./router');
const koa = require('koa');
const path = require('path');
const conf = require('./config.json');
const app = module.exports = koa();

// pass the configs
let config = {};
if (process.env.APP_ENV === 'dev') {
  config = conf.dev;
} else if (process.env.APP_ENV === 'prod') {
  config = conf.prod;
} else {
  config = conf.local;
}

// Logger
app.use(logger());

app.use(function* (next){
  this.config = config;
  yield next;
});

router(app);

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
