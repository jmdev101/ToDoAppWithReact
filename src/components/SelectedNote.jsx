import React from "react";

function SelectedNote(props) {
  return (
    <div className="selected-container">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default SelectedNote;
