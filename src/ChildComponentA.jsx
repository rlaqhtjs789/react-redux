import React from "react";
import ChildComponentB from "./ChildComponentB";

function ChildComponentA({ inputValue, setInputValue }) {
  return (
    <div>
      ChildComponentA
      <br />
      {inputValue}
      <ChildComponentB inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default ChildComponentA;
