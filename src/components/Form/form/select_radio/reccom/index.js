import React from "react";
import { SelectContainer } from "../role/style";
import Radio from "./radio";

export default () => {
  return (
    <SelectContainer>
      <label>
        * How likely is that you would recommend freeCodeCamp to a friend?
      </label>
      <Radio />
    </SelectContainer>
  );
};
