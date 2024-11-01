import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

function Note(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleNote(e) {
    const { name, value } = e.target;

    setNote({ ...note, [name]: value });
  }

  return (
    <div>
      <div className="title">
        <p></p>
        <h2>Notes</h2>
        <EditNoteIcon className="edit-icon" fontSize="large" onClick={handleClickOpen} />

        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: "100vw",
              height: 250,
            },
          }}
        >
          <DialogTitle>{"Add a note "}</DialogTitle>
          <form
            className="note-container"
            onSubmit={(e) => {
              props.onAddItem(note, e);
              setNote({ title: "", content: "" });
            }}
          >
            <input type="text" name="title" placeholder="Title" onChange={handleNote} value={note.title}></input>
            <textarea required name="content" placeholder="Content" onChange={handleNote} value={note.content}></textarea>
            <button onClick={() => handleClose()}>Add</button>
          </form>
        </Dialog>
      </div>
    </div>
  );
}

export default Note;
