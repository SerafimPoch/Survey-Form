import React, { Fragment } from "react";
import { InputContainer } from "./style";

export default () => {
  return (
    <Fragment>
      <InputContainer>
        <label>* Name:</label>
        <input type="text" placeholder="Enter your name" />
      </InputContainer>
      <InputContainer>
        <label>* Email:</label>
        <input type="email" placeholder="Enter your Email" />
      </InputContainer>
      <InputContainer>
        <label>* Age:</label>
        <input type="number" placeholder="Age" />
      </InputContainer>
    </Fragment>
  );
};
