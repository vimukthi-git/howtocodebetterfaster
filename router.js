'use strict';
const route = require('koa-route');
const controller = require('./controller');
// controller dependancies
const views = require('co-views');
const parse = require('co-body');

module.exports = (app) => {
  app.use(route.get('/', controller.home));
  app.use(route.get('/messages', controller.list));
  app.use(route.get('/messages/:id', controller.fetch));
  app.use(route.post('/messages', controller.create));
}
