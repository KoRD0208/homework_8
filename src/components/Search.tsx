import React from "react";
import { TextField } from "@mui/material";
import { SearchProps } from "../types";

function Search({ value, checkChange }: SearchProps) {
  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    checkChange(e.target.value);
    console.log(value);
  }

  return (
    <TextField
      type="text"
      label="Enter a name:"
      value={value}
      name="search"
      onChange={handleChange}
      className="search"
      placeholder="Name"
      sx={{ marginTop: 3, marginBottom: 3, marginRight: 6 }}
    />
  );
}

export default Search;
