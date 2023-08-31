import React from "react";
import classes from "./NavigationItem.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NavigationItem = (props) => {
  let location = useLocation();

  return (
    <li className={classes.NavigationItem}>
      <NavLink
        smooth
        to={props.link}
        target={props.target}
        exact={props.exact}
        onClick={props.clicked}
        activeClassName={
          `${location.pathname}${location.hash}` === props.link
            ? classes.active
            : ""
        }
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
