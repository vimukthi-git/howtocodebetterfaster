'use strict';

// Can you notice a problem with reponsibilities of this class?
class Notice {

  constructor(id, message) {
    this.id = id;
    this.message = message;
  }

  static* list(sort) {
    if(sort === 'alphabetical'){
      return AlphabeticalSortStrategy.sort(notices);
    } else {
      return ReverseChronologicalSortStrategy.sort(notices);
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

class AlphabeticalSortStrategy {
  static sort(notices) {
    let nots = notices.slice();
    nots.sort(function(a, b) {
      var nameA = a.message.toUpperCase(); // ignore upper and lowercase
      var nameB = b.message.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return nots;
  }
}

class ReverseChronologicalSortStrategy {
  static sort(notices) {
    let nots = notices.slice();
    nots.reverse();
    return nots;
  }
}

let notices = [
  new Notice(0, 'A is first letter'),
  new Notice(1, 'B is second letter')
];

module.exports = Notice;
