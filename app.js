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
const addNote = require("./utility");
const removeNote = require("./utility");
const listNotes = require("./utility");
const readNote = require("./utility");

// console.log(process.argv);
// console.log(yargs.argv);

yargs.version("1.1.0");

// yargs.command({
//   command: "add",
//   describe: "Adding a new note",
//   builder: {
//     title: {
//       describe: "No title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "No body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     addNote(argv.title, argv.body);
//   },
// }).argv;

// yargs.command({
//   command: "remove",
//   describe: "Removing a note",
//   builder: {
//     title: "Note Title",
//     demandOption: true,
//     type: "string",
//   },
//   handler: function (argv) {
//     removeNote(argv.title);
//   },
// }).argv;

yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
}).argv;

// yargs.command({
//   command: "list",
//   describe: "Listing the notes",
//   handler: function () {
//     listNotes();
//   },
// }).argv;
