'use strict';
const route = require('koa-route');
// controller dependancies
const views = require('co-views');
const parse = require('co-body');

let messages = [{
    id: 0,
    message: 'Koa next generation web framework for node.js'
}, {
    id: 1,
    message: 'Koa is a new web framework designed by the team behind Express'
}];

const render = views(__dirname + '/views', {
    map: {
        html: 'swig'
    }
});

module.exports = (app) => {
  app.use(route.get('/', function* home(ctx) {
      let msgs = messages.slice();
      msgs.reverse();
      this.body = yield render('list', {
          'messages': msgs
      });
  }));
  app.use(route.get('/messages', function* list() {
      this.body = yield messages;
  }));
  app.use(route.get('/messages/:id', function* fetch(id) {
      const message = messages[id];
      if (!message) {
          this.throw(404, 'message with id = ' + id + ' was not found');
      }
      this.body = yield message;
  }));
  app.use(route.post('/messages', function* create() {
      const message = yield parse(this);
      const id = messages.push(message) - 1;
      messages.shift();
      message.id = id;
      this.redirect('/');
  }));
}
