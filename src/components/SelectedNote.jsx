import React from "react";

function SelectedNote(props) {
  return (
    <div className="selected-container">
      {props.selectedBoolean ? (
        <div>
          <input type="text" name="title" placeholder="Title"></input>
          <textarea required name="content" placeholder="Content"></textarea>
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
            <button>Save</button>
          ) : (
            <div>
              <button onClick={(e) => props.onEditItem(e)}>Edit</button>
              <button onClick={() => props.onDeleteItem(props.id)}>Delete</button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SelectedNote;
