'use strict';

// Can you notice a problem with reponsibilities of this class?
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static* getUserByUsername(username) {
    for (let user of users) {
      if (user.username === username) {
        return user;
      }
    }
    return false;
  }
}

let users = [
  new User('vimukthi', '123'),
  new User('other', '123')
];

module.exports = User;
