import React from "react";
import Search from "./Search";
import Item from "./Item";

function PackedItems({ packed }: any) {
  return (
    <div className="items__packed-block">
      <p className="items__title">Packed items</p>
      <Search />
      <div className="items__packed">
        {packed.map((item: any) => {
          return <Item itemProps={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default PackedItems;
