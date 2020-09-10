import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon';

const toolbar = ( props ) => {

    return (
        <header className={props.toolbarClass}>
            <HamburgerIcon clicked={props.hamburgerIconClicked}  />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>

    );

};

export default toolbar;