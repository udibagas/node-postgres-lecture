"use strict"

const View = require("../views/view")

class Controller {

  static help() {
    const commands = [
      "$ node app.js - Display help message",
      "$ node app.js users - Dislay all users",
      "$ node app.js sales - Display all sales",
      "$ node app.js users::sales <id> - Display single user based on id with related sales",
      "$ node app.js sales::add <UserId> <date> <amount> - Add new sales",
      "$ node app.js sales::update <id> <UserId> <date> <amount> - Update sales based on id",
      "$ node app.js sales::delete <id> - Delete sales based on id",
      "$ node app.js sales::report <start> <end> - Display sales report between start and end date",
    ]

    View.showHelp(commands)
  }
}

module.exports = Controller