import { useState } from "react";
import "./App.css";

import ToDoItem from "./components/ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");

  // for empty array
  const [items, setItems] = useState([]);

  function onChangeHandler(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    // to make input blank after adding a task
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item,index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={onChangeHandler} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div className="tasks">
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//  TODO APP

//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
