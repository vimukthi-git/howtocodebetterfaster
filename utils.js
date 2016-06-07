'use strict';

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

module.exports.AlphabeticalSortStrategy = AlphabeticalSortStrategy;

class ReverseChronologicalSortStrategy {
  static sort(notices) {
    let nots = notices.slice();
    nots.reverse();
    return nots;
  }
}

module.exports.ReverseChronologicalSortStrategy = ReverseChronologicalSortStrategy;
