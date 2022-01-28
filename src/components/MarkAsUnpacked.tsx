import React from "react";
import { ItemProps } from "../types";
import { MarkedProps } from "../types";

function MarkAsUnpacked({ items, getItem }: MarkedProps) {
  function markAll() {
    items.forEach((item: ItemProps) => {
      item.isUnpacked = true;
      getItem(item);
    });
  }

  return <button onClick={markAll}>Mark All as unpacked</button>;
}

export default MarkAsUnpacked;
