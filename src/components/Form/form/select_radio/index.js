import React, { Fragment } from "react";
import Role from "./role";
import Reccom from "./reccom";
import Like from "./like";
import Future from "./future";

export default () => {
  return (
    <Fragment>
      <Role />
      <Reccom />
      <Like />
      <Future />
    </Fragment>
  );
};
