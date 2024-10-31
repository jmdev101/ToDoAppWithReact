import React from "react";

function List(props) {
  return (
    <div
      className="notes-container"
      style={{ cursor: "pointer", backgroundColor: props.id === props.selectedId ? "lightgray" : "white" }}
      onClick={() => {
        props.onSelectItem(props.id, props.title, props.content);
      }}
    >
      <ul>
        <div className="note">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </ul>
    </div>
  );
}

export default List;
