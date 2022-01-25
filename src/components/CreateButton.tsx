import React from "react";

function CreateButton({ children, ...props }: any) {

   return (
      <button {...props} className="create-btn">
         {children}
      </button>
   )
}

export default CreateButton;