import React, { useState } from "react";

function Note(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleNote(e) {
    const { name, value } = e.target;

    setNote({ ...note, [name]: value });
  }

  return (
    <div className="note-container">
      <input type="text" name="title" placeholder="Title" onChange={handleNote} value={note.title}></input>
      <textarea name="content" placeholder="Content" onChange={handleNote} value={note.content}></textarea>
      <button onClick={() => props.onAddItem(note)}>Add</button>
    </div>
  );
}

export default Note;
