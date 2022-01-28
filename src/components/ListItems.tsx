import React, { useState } from "react";
import Item from "./Item";
import Search from "./Search";
import { ItemProps, ItemsHandlersProps } from "../types";

function ListItems({ items, title, getItem, removeElem }: ItemsHandlersProps) {
  const [inputValue, setInputValue] = useState("");

  function checkChange(value: string) {
    setInputValue(value);
  }

  return (
    <ul className={title}>
      <h2>{title}</h2>
      <Search value={inputValue} checkChange={checkChange} />
      {items
        .filter((item: ItemProps) =>
          item.item.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((item: ItemProps) => {
          return (
            <Item
              itemProps={item}
              removeElem={removeElem}
              getItem={getItem}
              key={item.id}
            />
          );
        })}
    </ul>
  );
}

export default ListItems;
