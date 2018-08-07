import React, { Fragment } from "react";
import TextInputs from "./name_email_age";
import SelectRadio from "./select_radio/";
import Comment from "./comment";

export default () => {
  return (
    <Fragment>
      <TextInputs />
      <SelectRadio />
      <Comment />
    </Fragment>
  );
};
