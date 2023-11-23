const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added ✅");
  } else {
    console.log("Not added ❌");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    if (note.title === title) {
      return false;
    } else {
      return true;
    }
  });
  saveNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();
  notes.map((note) => {
    console.log(note);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => {
    return note.title === title;
  });
  console.log(noteToKeep);
};

module.exports = addNote;
module.exports = removeNote;
module.exports = listNotes;
module.exports = readNote;
