'use strict';
const views = require('co-views');
const parse = require('co-body');
const model = require('../models/user_model');

const render = views(__dirname + '/../views', {
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
