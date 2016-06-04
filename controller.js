'use strict';
const views = require('co-views');
const parse = require('co-body');
let messages = [{
    id: 0,
    message: 'Koa next generation web framework for node.js'
}, {
    id: 1,
    message: 'Koa is a new web framework designed by the team behind Express'
}];

const render = views(__dirname + '/../views', {
    map: {
        html: 'swig'
    }
});

module.exports.home = function* home(ctx) {
    let msgs = messages.slice();
    msgs.reverse();
    this.body = yield render('list', {
        'messages': msgs
    });
};

module.exports.list = function* list() {
    this.body = yield messages;
};

module.exports.fetch = function* fetch(id) {
    const message = messages[id];
    if (!message) {
        this.throw(404, 'message with id = ' + id + ' was not found');
    }
    this.body = yield message;
};

module.exports.create = function* create() {
    const message = yield parse(this);
    const id = messages.push(message) - 1;
    messages.shift();
    message.id = id;
    this.redirect('/');
};
