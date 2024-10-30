import React from "react";

function List(props) {
  return (
    <div className="notes-container">
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
