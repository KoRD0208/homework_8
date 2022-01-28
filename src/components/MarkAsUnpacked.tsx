import React from "react";
import { ItemProps } from "../types";
import { MarkedProps } from "../types";
import { Button } from "@mui/material";

function MarkAsUnpacked({ items, getItem }: MarkedProps) {
  function markAll() {
    items.forEach((item: ItemProps) => {
      item.isUnpacked = true;
      getItem(item);
    });
  }

  return (
    <Button variant="outlined" onClick={markAll}>
      Mark All as unpacked
    </Button>
  );
}

export default MarkAsUnpacked;
