import React from "react";

function SelectedNote(props) {
  return (
    <div className="selected-container">
      {props.selectedBoolean ? (
        <div>
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
            <button onClick={() => props.onSaveEdit(props.id)}>Save</button>
          ) : (
            <div>
              <button onClick={() => props.onEditItem()}>Edit</button>
              <button onClick={() => props.onDeleteItem(props.id)}>Delete</button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SelectedNote;
