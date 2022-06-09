"use strict"

const Controller = require("./controllers/controller");

const command = process.argv[2]
const params = process.argv.slice(3)

switch (command) {
  case "user":
    
    break;

  default:
    Controller.help()
    break;
}