import React, { useState, useEffect } from "react";
import PackedItems from "./PackedItems";
import Item from "./Item";
import UnPackedItems from "./UnPackedItems";

function ListItems({ items, title }: any) {
  return (
    <ul className={title}>
      <h2>{title}</h2>
      {items.map((item: any) => {
        return <Item itemProps={item} key={item.id} />;
      })}
    </ul>
  );
}

export default ListItems;
