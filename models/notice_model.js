'use strict';

const utils = require('../utils');

// Can you notice a problem with reponsibilities of this class?
class Notice {

  constructor(id, message) {
    this.id = id;
    this.message = message;
  }

  static* list(sort) {
    if(sort === 'alphabetical'){
      return utils.AlphabeticalSortStrategy.sort(notices);
    } else {
      return utils.ReverseChronologicalSortStrategy.sort(notices);
    }
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
  new Notice(0, 'A is first letter'),
  new Notice(1, 'B is second letter')
];

module.exports = Notice;
