import React from "react";
import { SelectContainer } from "../select_radio/role/style";

export default () => {
  return (
    <SelectContainer>
      <label>Any Comments or Suggestions?</label>
      <textarea placeholder="Enter your comment here" />
    </SelectContainer>
  );
};
