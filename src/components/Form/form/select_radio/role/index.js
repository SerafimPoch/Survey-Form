import React from "react";
import { SelectContainer } from "./style";

export default () => {
  return (
    <SelectContainer>
      <label>Which option best describes your current role?</label>
      <select>
        <option>Student</option>
        <option>Full Time Job</option>
        <option>Full Time Learner</option>
        <option>Prefer not to say</option>
        <option>Other</option>
      </select>
    </SelectContainer>
  );
};
