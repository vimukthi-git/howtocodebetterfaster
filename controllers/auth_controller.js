'use strict';
const views = require('co-views');
const parse = require('co-body');
const model = require('../models/user_model');

const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.loginPage = function *loginPage(ctx) {
  if(this.config.auth) {
    this.body = yield render('login');
  } else {
    this.redirect('/home');
  }
};

module.exports.login = function *login(ctx) {
  let posted = yield parse(this);
  let user = yield model.getUserByUsername(posted.username);

  /**
  * This is a BAD example of how to implement authentication.
  * I do this just for the sake of keeping it simple for the presentation.
  * Use https://github.com/rkusa/koa-passport or something else for actual apps
  **/
  if (user && user.password === posted.password) {
    this.redirect('/home');
  } else {
    this.redirect('/');
  }
};
