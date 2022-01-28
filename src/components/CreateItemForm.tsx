import React, { useState } from "react";
import CreateInput from "./CreateInput";
import CreateButton from "./CreateButton";
import { addItemType } from "../types";

function CreateItemForm({ addItem }: addItemType) {
  let [inputValue, setInputValue] = useState("");

  function createItem(e: React.SyntheticEvent): void {
    e.preventDefault();
    addItem(inputValue);
    setInputValue("");
  }

  function inputChange(value: string) {
    setInputValue(value);
  }

  return (
    <div className="create-item-form">
      <form className="form" onSubmit={(e) => createItem(e)}>
        <CreateInput value={inputValue} checkInput={inputChange} />
        <CreateButton>Create</CreateButton>
      </form>
    </div>
  );
}

export default CreateItemForm;
