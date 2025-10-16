import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
 
function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const API_URL = "http://localhost:5000/api/notes";
 
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setNotes(res.data);
    } catch {
      setError("Failed to fetch notes.");
    } finally {
      setLoading(false);
    }
  };
 
  const addNote = async () => {
    if (!note.trim()) return;
    try {
      const res = await axios.post(API_URL, { text: note });
      setNotes([...notes, res.data]);
      setNote("");
    } catch {
      setError("Failed to add note.");
    }
  };
 
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes(notes.filter((n) => n.id !== id));
    } catch {
      setError("Failed to delete note.");
    }
  };
 
  useEffect(() => {
    fetchNotes();
  }, []);
 
  return (
<div className="app">
<h2> QuickNotes</h2>
<div className="note-input">
<input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
        />
<button onClick={addNote}>Save</button>
</div>
 
      {loading && <p>Loading notes...</p>}
      {error && <p className="error">{error}</p>}
 
      <ul className="note-list">
        {notes.map((n) => (
<li key={n.id}>
            {n.text}
<button onClick={() => deleteNote(n.id)}>🗑️</button>
</li>
        ))}
</ul>
</div>
  );
}
 
export default App;