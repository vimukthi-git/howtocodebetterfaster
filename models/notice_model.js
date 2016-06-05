'use strict';

class Notice {
  constructor(id, message) {
    this.id = id;
    this.message = message;
  }
}

let notices = [
  new Notice(0, 'Koa next generation web framework for node.js'),
  new Notice(1, 'Koa is a new web framework designed by the team behind Express')
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
  let notice = new Notice(0, message);
  const id = notices.push(notice.message) - 1;
  notice.id = id;
  return message;
};
