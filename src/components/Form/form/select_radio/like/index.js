import React from "react";
import { SelectContainer } from "../role/style";

export default () => {
  return (
    <SelectContainer>
      <label>What do you like most in FCC:</label>
      <select defaultValue="basic">
        <option disabled value="basic">
          Select an option
        </option>
        <option>Challenges</option>
        <option>Projects</option>
        <option>Community</option>
        <option>Open Source</option>
      </select>
    </SelectContainer>
  );
};
