import React, { useState, useEffect } from "react";
import "./App.css";
import CreateItemForm from "./components/CreateItemForm";
import ListItems from "./components/ListItems";
import { ItemProps } from "./types";

function App() {
  let [items, setItems] = useState<any>([]);
  let counter = 0;
  // let packedItems = [];
  // let unpackedItems = [];

  useEffect(() => {
    console.log("yes");
  });

  function addItem(item: any) {
    items.push({
      id: Date.now(),
      item,
      isPacked: true,
    });
    setItems(items);
    counter++;
    console.log(items);
  }

  // function sortItems() {
  //   items.forEach((item: any) => {
  //     if (item.isPacked) {
  //       unpackedItems.push(item);
  //     } else {
  //       packedItems.push(item);
  //     }
  //   });
  // }

  // const packContext = React.createContext(changePackStatus);

  return (
    <div className="App">
      <div className="container">
        <CreateItemForm addItem={addItem} />
        <div className="items">
          <ListItems items={items} title="Packed Items" />
          <ListItems items={items} title="Unpacked Items" />
        </div>
      </div>
    </div>
  );
}

export default App;
