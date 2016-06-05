'use strict';

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

let users = [
  new User('vimukthi', '123'),
  new User('other', '123')
];

module.exports.getUserByUsername = function* getUserByUsername(username) {
  for (let user of users) {
    if (user.username === username) {
      return user;
    }
  }
  return false;
};
