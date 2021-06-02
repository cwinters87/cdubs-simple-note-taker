const router = require('express').Router();
const createNote = require('../../lib/notes');
const deleteNote = require('../../lib/deleteNote');
const notes = require('../../db/db')

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  const note = createNote(req.body, notes);
  res.json(note);
});

// delete a note
router.delete("/notes/:id", (req, res) => {
  deleteNote(parseInt(req.params.id), notes);
  res.status(202).send();
});

module.exports = router;