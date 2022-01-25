import React, { useState } from "react";
import "./App.css";
import CreateItemForm from "./components/CreateItemForm";
import Items from "./components/Items";
import { ItemProps } from "./types";

function App() {
  let [items, setItems] = useState<any>([]);
  let counter = 0;

  function addItem(item: any) {
    items.push({
      id: counter,
      item,
      isPacked: true,
    });
    setItems(items);
    counter++;
    console.log(items);
  }

  return (
    <div className="App">
      <div className="container">
        <CreateItemForm addItem={addItem} />
        <Items items={items} />
      </div>
    </div>
  );
}

export default App;
