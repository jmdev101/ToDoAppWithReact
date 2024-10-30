import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import List from "./List";
import SelectedNote from "./SelectedNote";

function App() {
  const [listItems, setListItems] = useState([]);
  const [selected, setSelected] = useState({});

  function addItem(newItem, e) {
    setListItems([...listItems, newItem]);
    e.preventDefault();
  }

  function selectItem(id, title, content) {
    setSelected({ id, title, content });
  }

  function deleteItem(id) {
    setListItems(listItems.filter((list, index) => index !== id));
    setSelected({ id: "", title: "", content: "" });
  }

  return (
    <div className="main-container">
      <Header></Header>

      <SelectedNote id={selected.id} title={selected.title} content={selected.content} onDeleteItem={deleteItem}></SelectedNote>

      <Note onAddItem={addItem}></Note>

      {listItems.map((listItem, index) => {
        return <List key={index} id={index} title={listItem.title} content={listItem.content} onSelectItem={selectItem}></List>;
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
