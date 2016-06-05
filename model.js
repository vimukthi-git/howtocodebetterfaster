'use strict';

let notices = [
  { id: 0,
    message: 'Koa next generation web framework for node.js'
  },
  { id: 1,
    message: 'Koa is a new web framework designed by the team behind Express'
  }
];

module.exports.list = function* list() {
  let nots = notices.slice();
  nots.reverse();
  return nots;
};

module.exports.getById = function* getById(id) {
  return notices[id];
};

module.exports.create = function* create(message) {
  notices.shift();
  const id = notices.push(message) - 1;
  message.id = id;
  return message;
};
