import React, { useState } from "react";

function Note(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleNote(e) {
    const { name, value } = e.target;

    setNote({ ...note, [name]: value });
  }

  return (
    <form
      className="note-container"
      onSubmit={(e) => {
        props.onAddItem(note, e);
        setNote({ title: "", content: "" });
      }}
    >
      <input type="text" name="title" placeholder="Title" onChange={handleNote} value={note.title}></input>
      <textarea required name="content" placeholder="Content" onChange={handleNote} value={note.content}></textarea>
      <button>Add</button>
    </form>
  );
}

export default Note;
