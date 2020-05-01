import React, { Fragment } from "react";
import { NavLink } from "reactstrap";
import {routes} from "../routes/routes";

const LeftSideBar = () => {
  return (
<Fragment>
      <br/>
      <br/>
      <NavLink href={routes.intro}>Introduction to Java</NavLink>
      <NavLink href={routes.historyOfJava}>History of Java</NavLink>
      <NavLink href={routes.firstProgramInJava}>First program in java</NavLink>
      <NavLink href={routes.variablesInJava}>Variables in java</NavLink>
</Fragment>
  );
};

export default LeftSideBar;
