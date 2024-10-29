import React from "react";

function List(props) {
  return (
    <div className="notes-container">
      <div>
        <ul>
          <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default List;
