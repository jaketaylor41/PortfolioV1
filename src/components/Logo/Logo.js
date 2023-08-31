import React from "react";
import classes from "./Logo.css";

const Logo = (props) => (
  <div className={classes.LogoDiv}>
    <a href="/">
      <p className={classes.Logo}>JT</p>
    </a>
  </div>
);

export default Logo;
