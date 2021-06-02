const fs = require('fs');
const path = require('path');

function deleteNote (id, notesArray) {
    const note = notesArray.find(note => note.id === id)
    notesArray.splice(notesArray.indexOf(note), 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
        )
}

module.exports = deleteNote