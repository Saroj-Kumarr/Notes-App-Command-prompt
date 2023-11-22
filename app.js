// const fs = require("fs");
// const chalk=require('chalk')
// fs.writeFileSync("note.txt", "Node.js The complete developer course");
// fs.appendFileSync(
//   "note.txt",
//   "This is the best course for backend development"
// );

// const getNotes = require("./notes");

// const msg = getNotes();

// console.log(msg);

// **************** Validator Package ************

// const validator = require("validator");

// console.log(validator.isEmail("saroj@gmail.com"));

// console.log(validator.isURL("www.saroj.in"));

// ***************  Chalk Package *****************

// npm i chalk

// const log = console.log;

// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// log(chalk.blue.bgRed.bold('Hello world!'));

// log(chalk.blue('Hello', 'World!', 'saroj', 'satich'));

// ************** Command Line Argument **************

// console.log(process.argv);

// const command = process.argv[2];

// console.log(command);

// if (command === "add") {
//   console.log("Adding note ✅");
// } else if (command === "remove") {
//   console.log("Removing note ❌");
// }

// Using a new package for work with command arguments easily

const yargs = require("yargs");

console.log(process.argv);
console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "Adding a new note",
  handler: function () {
    console.log("Adding a new note");
  },
}).argv;

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function () {
    console.log("Removing a new note");
  },
}).argv;

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading a note");
  },
}).argv;

yargs.command({
  command: "list",
  describe: "Listing the notes",
  handler: function () {
    console.log("Listing the notes");
  },
}).argv;
