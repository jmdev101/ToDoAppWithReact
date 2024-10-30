import React from "react";

function SelectedNote(props) {
  return (
    <div className="selected-container">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      {props.content ? (
        <div>
          <button>Edit</button>
          <button onClick={() => props.onDeleteItem(props.id)}>Delete</button>
        </div>
      ) : null}
    </div>
  );
}

export default SelectedNote;
