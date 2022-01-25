import React from "react";
// import classes from './componentsStyle/CreateInput.module.css';

function CreateInput({ value, checkInput }: any) {
  const handleChange = (e: any) => {
    checkInput(e.target.value);
  };

  return (
    <input
      type="text"
      className="create-input"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default CreateInput;
