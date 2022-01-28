import React, { useState } from "react";
import "./App.css";
import CreateItemForm from "./components/CreateItemForm";
import ListItems from "./components/ListItems";
import { ItemProps } from "./types";
import MarkAsUnpacked from "./components/MarkAsUnpacked";

// const packContext = React.createContext();

function App() {
  let [items, setItems] = useState<ItemProps[]>([]);

  function addItem(item: string): void {
    setItems((prevItems: ItemProps[]) => {
      prevItems.push({
        id: Date.now(),
        item,
        isUnpacked: false,
      });
      return [...prevItems];
    });
  }

  function getItem(item: ItemProps) {
    console.log(item.isUnpacked);
    setItems((prevItems: ItemProps[]) => {
      prevItems.map((elem: ItemProps) => {
        if (elem.id === item.id) {
          elem.isUnpacked = item.isUnpacked;
        }
      });
      return [...prevItems];
    });
  }

  function removeElem(elem: ItemProps) {
    for (let i = 0; i < items.length; i++) {
      if (elem.id === items[i].id) {
        items.splice(i, 1);
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <CreateItemForm addItem={addItem} />
        <div className="items">
          <div className="packed-items">
            <ListItems
              getItem={getItem}
              removeElem={removeElem}
              items={items.filter((item: any) => !item.isUnpacked)}
              title="Packed Items"
            />
            <MarkAsUnpacked
              items={items.filter((item: any) => !item.isUnpacked)}
              getItem={getItem}
            />
          </div>
          <ListItems
            getItem={getItem}
            removeElem={removeElem}
            items={items.filter((item: any) => item.isUnpacked)}
            title="Unpacked Items"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
