import React from "react";
import Search from "./Search";

function UnPackedItems(props: any) {
  return (
    <div className="items__packed-block">
      <p className="items__title">Unpacked items</p>
      <Search />
      {props.render()}
    </div>
  );
}

export default UnPackedItems;
