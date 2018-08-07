import React from "react";
import { SelectContainer } from "../role/style";
import Radion from "./radio";

export default () => {
  return (
    <SelectContainer>
      <label>
        Things that should be improved in the future (Check all that apply):
      </label>
      <Radion />
    </SelectContainer>
  );
};
