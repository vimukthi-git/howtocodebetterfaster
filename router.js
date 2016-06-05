'use strict';
const route = require('koa-route');
const authController = require('./controllers/auth_controller');
const noticeController = require('./controllers/notice_controller');

module.exports = (app) => {
  app.use(route.get('/', authController.loginPage));
  app.use(route.post('/login', authController.login));
  app.use(route.get('/home', noticeController.home));
  app.use(route.get('/notices', noticeController.list));
  app.use(route.get('/notices/:id', noticeController.fetch));
  app.use(route.post('/notices', noticeController.create));
}
