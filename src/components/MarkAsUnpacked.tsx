import React from "react";

function MarkAsUnpacked({ items, getItem }: any) {
  function markAll() {
    items.forEach((item: any) => {
      item.isUnpacked = true;
      getItem(item);
    });
  }

  return <button onClick={markAll}>Mark All as unpacked</button>;
}

export default MarkAsUnpacked;
