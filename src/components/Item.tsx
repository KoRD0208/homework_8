import React, { useState } from "react";
import { ItemHandlersProps } from "../types";

function Item({ itemProps, getItem, removeElem }: ItemHandlersProps) {
  const [deleted, setDeleted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    itemProps.isUnpacked = target.checked;
    getItem(itemProps);
  }

  function removeItem() {
    setDeleted(true);
    // console.log(itemProps);
    removeElem(itemProps);
  }

  return (
    <>
      {!deleted && (
        <li className="items__item">
          <div className="items__props">
            <input
              type="checkbox"
              checked={itemProps.isUnpacked}
              onChange={handleChange}
              className="items__check"
            />
            <label>{itemProps.item}</label>
          </div>
          <div className="items__remove">
            <button onClick={removeItem}>Remove</button>
          </div>
        </li>
      )}
    </>
  );
}

export default Item;
