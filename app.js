// const fs = require("fs");
// fs.writeFileSync("note.txt", "Node.js The complete developer course");
// fs.appendFileSync(
//   "note.txt",
//   "This is the best course for backend development"
// );

// const getNotes = require("./notes");

// const msg = getNotes();

// console.log(msg);

const validator=require('validator');

console.log(validator.isEmail('saroj@gmail.com'));

console.log(validator.isURL('www.saroj.in'))
