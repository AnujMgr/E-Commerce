import React from "react";
import { CheckBoxContainer } from "./CheckboxStyle";

const Checkbox = ({ name, handleFilterItems, isChecked }) => {
  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleFilterItems(name, !isChecked)}
      ></input>
      <span>{name}</span>
    </CheckBoxContainer>
  );
};

export default Checkbox;
