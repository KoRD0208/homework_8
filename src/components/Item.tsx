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
    <div className="items__item">
      <div className="items__props">
        <input type="checkbox" className="items__check" />
        <label>{itemProps.item}</label>
      </div>
      <div className="items__remove">
        <button>Remove</button>
      </div>
    </div>
  );
}

export default Item;
