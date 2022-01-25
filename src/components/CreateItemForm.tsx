import React, { useState } from "react";
import CreateInput from "./CreateInput";
import CreateButton from "./CreateButton";

function CreateItemForm({ addItem }: any) {
  let [inputValue, setInputValue] = useState("");

  function createItem(e: any) {
    e.preventDefault();
    addItem(inputValue);
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
