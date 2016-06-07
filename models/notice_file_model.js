'use strict';

const utils = require('../utils');
const fs = require('fs');

// Can you notice a problem with reponsibilities of this class?
class Notice {

  constructor(id, message) {
    this.id = id;
    this.message = message;
  }

  static* list(sort) {
    let notices = require('../notices.json');
    if(sort === 'alphabetical'){
      return utils.AlphabeticalSortStrategy.sort(notices);
    } else {
      return utils.ReverseChronologicalSortStrategy.sort(notices);
    }
  }

  static* getById(id) {
    let notices = require('../notices.json');
    return notices[id];
  }

  static* create(message) {
    let notices = require('../notices.json');
    let notice = new Notice(notices.length, message.message);
    notices.shift();
    notices.push(notice);
    return yield saveToFile(message, JSON.stringify(notices));
  }
}

function saveToFile(message, noticesJson) {
  return new Promise((resolve, reject) => {
    fs.writeFile('notices.json', noticesJson, function (err) {
      if (err) throw err;
      return resolve(message);
    });
  });
}

module.exports = Notice;
