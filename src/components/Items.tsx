import React, { useState, useEffect } from "react";
import PackedItems from "./PackedItems";
import Item from "./Item";
import UnPackedItems from "./UnPackedItems";

function Items({ items }: any) {
  return (
    <div className="items">
      {items.map((item: any) => {
        return <Item itemProps={item} key={item.id} />;
      })}
    </div>
  );
}

export default Items;
