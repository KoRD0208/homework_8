import React from "react";
import classes from "./componentsStyle/CreateInput.module.css";
import { CreateInputProps } from "../types";

function CreateInput({ value, checkInput }: CreateInputProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    checkInput(e.target.value);
  };

  return (
    <div className={classes.CreateBlock}>
      <input
        type="text"
        className={classes.CreateInput}
        placeholder="Item"
        id="create"
        value={value}
        name="create"
        onChange={handleChange}
      />
      <label htmlFor="create" className={classes.CreateLabel}>
        Enter an item:
      </label>
    </div>
  );
}

export default CreateInput;
