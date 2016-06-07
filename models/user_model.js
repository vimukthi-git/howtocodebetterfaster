'use strict';

const _usernameSymbol = Symbol('username');
const _passwordSymbol = Symbol('password');

// Can you notice a problem with reponsibilities of this class?
class User {
  constructor(username, password) {
    this[_usernameSymbol] = username;
    this[_passwordSymbol] = password;
  }

  get username() {
    return this[_usernameSymbol];
  }

  get password() {
    return this[_passwordSymbol];
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
