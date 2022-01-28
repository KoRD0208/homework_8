import React, { useState } from "react";
import { ItemHandlersProps } from "../types";
import { Button } from "@mui/material";

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
          <Button color="error" onClick={removeItem}>
            Remove
          </Button>
        </li>
      )}
    </>
  );
}

export default Item;
