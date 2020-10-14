import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Resume2020 from '../../../assets/images/Resume2020.pdf';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem clicked={props.closed} link="/#about">About</NavigationItem>
        <NavigationItem clicked={props.closed} link="/#projects">Projects</NavigationItem>
        <NavigationItem clicked={props.closed} link="/#skills">Skills</NavigationItem>
        <NavigationItem clicked={props.closed} link={Resume2020} target="_blank">Resume</NavigationItem>
    </ul>



);


export default navigationItems;