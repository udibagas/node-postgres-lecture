"use strict"

class View {
  static showHelp(commands) {
    commands.forEach(cmd => {
      console.log(cmd);
    })
  }
  
  static printError(err) {
    console.log('ERROR -' + error);
  }

  static printTable(data) {
    console.table(data);
  }
}

module.exports = View