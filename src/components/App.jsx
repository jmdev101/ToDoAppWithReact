import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import List from "./List";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(newItem) {
    setListItems([...listItems, newItem]);
  }

  return (
    <div className="main-container">
      <Header></Header>
      <Note onAddItem={addItem}></Note>

      {listItems.map((listItem, index) => {
        return <List key={index} id={index} title={listItem.title} content={listItem.content}></List>;
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
