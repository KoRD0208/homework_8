import React, { useState } from "react";
import "./App.css";
import CreateItemForm from "./components/CreateItemForm";
import ListItems from "./components/ListItems";
import { ItemProps } from "./types";
import MarkAsUnpacked from "./components/MarkAsUnpacked";

// const packContext = React.createContext();

function App() {
  let [items, setItems] = useState<any>([]);

  function addItem(item: any): void {
    setItems((prevItems: any) => {
      prevItems.push({
        id: Date.now(),
        item,
        isUnpacked: false,
      });
      return [...prevItems];
    });
    // console.log(items);
  }

  function getItem(item: any) {
    console.log(item.isUnpacked);
    setItems((prevItems: any) => {
      prevItems.map((elem: any) => {
        if (elem.id === item.id) {
          elem.isUnpacked = item.isUnpacked;
        }
      });
      // console.log(prevItems);
      return [...prevItems];
    });
  }

  function removeElem(elem: any) {
    for (let i = 0; i < items.length; i++) {
      if (elem.id === items[i].id) {
        items.splice(i, 1);
      }
    }
    console.log(items);
  }

  return (
    <div className="App">
      <div className="container">
        <CreateItemForm addItem={addItem} items={items} />
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
