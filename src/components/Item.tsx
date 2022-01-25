import React from "react";

interface ItemProp {
  itemProps: {
    id: number;
    item: string;
    isPacked: boolean;
  };
}

function Item({ itemProps }: ItemProp) {
  return (
    <li className="items__item">
      <div className="items__props">
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              itemProps.isPacked = false;
            } else {
              itemProps.isPacked = true;
            }
          }}
          className="items__check"
        />
        <label>{itemProps.item}</label>
      </div>
      <div className="items__remove">
        <button>Remove</button>
      </div>
    </li>
  );
}

export default Item;
