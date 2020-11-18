import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems} onClick={props.clicked}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/development">Development</NavigationItem>
        <NavigationItem link="/photography">Photography</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;