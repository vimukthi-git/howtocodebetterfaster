'use strict';
const views = require('co-views');
const parse = require('co-body');
const model = require('./model');

const render = views(__dirname + '/views', {
  map: { html: 'swig' }
});

module.exports.loginPage = function *loginPage(ctx) {
  this.body = yield render('login');
};

module.exports.login = function *login(ctx) {
  let posted = yield parse(this);
  let user = yield model.getUserByUsername(posted.username);
  if (user && user.password === posted.password) {
    this.redirect('/home');
  } else {
    this.redirect('/');
  }
};

module.exports.home = function *home(ctx) {
  let nots = yield model.list();
  this.body = yield render('list', {
     'messages': nots
   });
};

module.exports.list = function *list() {
  this.body = yield model.list();
};

module.exports.fetch = function *fetch(id) {
  const message = yield model.getById(id);
  if (!message) {
    this.throw(404, 'message with id = ' + id + ' was not found');
  }
  this.body = yield message;
};

module.exports.create = function *create() {
  const message = yield parse(this);
  yield model.create(message);
  this.redirect('/home');
};
