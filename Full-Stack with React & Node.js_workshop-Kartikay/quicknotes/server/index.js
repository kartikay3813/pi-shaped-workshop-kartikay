import express from "express";

import cors from "cors";
 
const app = express();

const PORT = 5000;
 
app.use(cors());

app.use(express.json());
 
let notes = [];

let idCounter = 1;
 
 
// Get all notes

app.get("/api/notes", (req, res) => {

  res.json(notes);

});
 
// Add new note

app.post("/api/notes", (req, res) => {

  const newNote = { id: idCounter++, text: req.body.text };

  notes.push(newNote);

  res.status(201).json(newNote);

});
 
// Delete a note

app.delete("/api/notes/:id", (req, res) => {

  const id = parseInt(req.params.id);

  notes = notes.filter((n) => n.id !== id);

  res.sendStatus(204);

});

app.get('/', (req, res) => {
  res.send('Backend is here!');
});

app.listen(PORT, () => {

  console.log(` Server running on http://localhost:${PORT}`);
 
});
 