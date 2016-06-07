'use strict';
const views = require('co-views');
const parse = require('co-body');
const model = require('../models/notice_file_model');

const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home(ctx) {
  let nots = yield model.list(this.query.sort);
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
