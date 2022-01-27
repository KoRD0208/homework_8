import React, { useState } from "react";

interface ItemP {
  id: number;
  item: string;
  isUnpacked: boolean;
}

interface ItemProp {
  itemProps: ItemP;
  getItem: (item: ItemP) => void;
  removeElem: (elem: ItemP) => void;
}

function Item({ itemProps, getItem, removeElem }: ItemProp) {
  const [deleted, setDeleted] = useState(false);

  function handleChange(e: any) {
    itemProps.isUnpacked = e.target.checked;
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
              onChange={(e: any) => handleChange(e)}
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
