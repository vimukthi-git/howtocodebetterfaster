'use strict';

// Can you notice a problem with reponsibilities of this class?
class Notice {

  constructor(id, message) {
    this.id = id;
    this.message = message;
  }

  static* list() {
    let nots = notices.slice();
    nots.reverse();
    return nots;
  }

  static* getById(id) {
    return notices[id];
  }

  static* create(message) {
    notices.shift();
    let notice = new Notice(0, message);
    const id = notices.push(notice.message) - 1;
    notice.id = id;
    return message;
  }
}

let notices = [
  new Notice(0, 'Koa next generation web framework for node.js'),
  new Notice(1, 'Koa is a new web framework designed by the team behind Express')
];

module.exports = Notice;
