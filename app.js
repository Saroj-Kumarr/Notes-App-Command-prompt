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
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
