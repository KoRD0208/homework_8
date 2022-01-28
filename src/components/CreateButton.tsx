import React from "react";
import classes from "./componentsStyle/CreateButton.module.css";

function CreateButton({ children, ...props }: { children: React.ReactNode }) {
  return (
    <button {...props} className={classes.CreateBtn}>
      {children}
    </button>
  );
}

export default CreateButton;
