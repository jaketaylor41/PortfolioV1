import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem clicked={props.closed} link="/#about">About</NavigationItem>
        <NavigationItem clicked={props.closed} link="/#projects">Projects</NavigationItem>
        <NavigationItem clicked={props.closed} link="/#skills">Skills</NavigationItem>
        <NavigationItem clicked={props.closed} link="">Resume</NavigationItem>
    </ul>



);


export default navigationItems;