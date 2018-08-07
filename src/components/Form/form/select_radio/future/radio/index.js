import React from "react";
import { RadioContainer, RadioElement } from "../../reccom/radio/style";

export default () => {
  return (
    <RadioContainer>
      <RadioElement>
        <input type="radio" id="Front-end Projects" />
        <label htmlFor="Front-end Projects">Front-end Projects</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Back-end Projects" />
        <label htmlFor="Back-end Projects">Back-end Projects</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Data Visualization" />
        <label htmlFor="Data Visualization">Data Visualization</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Challenges" />
        <label htmlFor="Challenges">Challenges</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Open Source Community" />
        <label htmlFor="Open Source Community">Open Source Community</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Gitter help rooms" />
        <label htmlFor="Gitter help rooms">Gitter help rooms</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Videos" />
        <label htmlFor="Videos">Videos</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="City Meetups" />
        <label htmlFor="City Meetups">City Meetups</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Wiki" />
        <label htmlFor="Wiki">Wiki</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Forum" />
        <label htmlFor="Forum">Forum</label>
      </RadioElement>
      <RadioElement>
        <input type="radio" id="Additional Courses" />
        <label htmlFor="Additional Courses">Additional Courses</label>
      </RadioElement>
    </RadioContainer>
  );
};
