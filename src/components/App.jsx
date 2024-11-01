import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import List from "./List";
import SelectedNote from "./SelectedNote";

function App() {
  const [listItems, setListItems] = useState([]);
  const [selected, setSelected] = useState({});
  const [selectedBoolean, setSelectedBoolean] = useState(false);

  function addItem(newItem, e) {
    setListItems([...listItems, newItem]);
    e.preventDefault();
  }

  function selectItem(id, title, content) {
    setSelectedBoolean(false);
    setSelected({ id, title, content });
  }

  function deleteItem(id) {
    setListItems(listItems.filter((list, index) => index !== id));
    setSelected({ id: "", title: "", content: "" });
  }

  function editItem() {
    setSelectedBoolean(true);
  }

  function editNote(e) {
    setSelected({ ...selected, [e.target.name]: e.target.value });
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function saveEdit(id) {
    setListItems(listItems.map((list, index) => (index === id ? selected : list)));
    setSelectedBoolean(false);
  }

  return (
    <div className="main-container">
      <Header></Header>

      <SelectedNote
        id={selected.id}
        title={selected.title}
        content={selected.content}
        onDeleteItem={deleteItem}
        selectedBoolean={selectedBoolean}
        onEditItem={editItem}
        onEditNote={editNote}
        onSaveEdit={saveEdit}
      ></SelectedNote>

      <Note onAddItem={addItem}></Note>

      {listItems.map((listItem, index) => {
        return <List key={index} id={index} title={listItem.title} content={listItem.content} onSelectItem={selectItem} selectedId={selected.id}></List>;
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
