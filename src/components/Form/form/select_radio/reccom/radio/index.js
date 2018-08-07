import React from "react";
import { RadioContainer, RadioElement } from "./style";

export default () => {
  return (
    <RadioContainer>
      <RadioElement>
        <input type="radio" id="definitely" />
        <label htmlFor="definitely">Definitely</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="maybe" />
        <label htmlFor="maybe">Maybe</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="not_sure" />
        <label htmlFor="not_sure">Not sure</label>
      </RadioElement>
    </RadioContainer>
  );
};
