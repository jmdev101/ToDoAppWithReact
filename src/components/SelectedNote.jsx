import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function SelectedNote(props) {
  return (
    <div className="selected-container">
      {props.selectedBoolean ? (
        <div className="edit-selected">
          <input type="text" name="title" defaultValue={props.title} onChange={(e) => props.onEditNote(e)}></input>
          <textarea required name="content" defaultValue={props.content} onChange={(e) => props.onEditNote(e)}></textarea>
        </div>
      ) : (
        <div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      )}

      {props.content ? (
        <div>
          {props.selectedBoolean ? (
            <div>
              <button onClick={() => props.onCloseEdit()}>Cancel</button>
              <button onClick={() => props.onSaveEdit(props.id)}>Save</button>
            </div>
          ) : (
            <div>
              <EditOutlinedIcon onClick={() => props.onEditItem()} />
              <DeleteOutlinedIcon onClick={() => props.onDeleteItem(props.id)} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SelectedNote;
