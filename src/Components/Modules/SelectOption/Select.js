import React from "react";
import { StyleSelect } from "./StyleSelect";

function Select() {
  return (
    <StyleSelect name="slct" id="slct">
      <option defaultValue disabled>
        Sort Option
      </option>
      <option value="1">Pure CSS</option>
      <option value="2">No JS</option>
      <option value="3">Nice!</option>
    </StyleSelect>
  );
}

export default Select;
