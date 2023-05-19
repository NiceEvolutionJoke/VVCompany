import React, { useState } from 'react';
import classes from './HeaderBurger.module.scss'
import classNames from 'classnames';


const HeaderBurger = ({ isMenuOpen, toggleMenu }) => {

    /*     const [isMenuOpen, toggleMenu] = useState(true);
        function toggleMenuMode() {
            toggleMenu(!isMenuOpen)
        } */

    return (
        <div onClick={toggleMenu} className={isMenuOpen ? classes.HeaderBurger : classNames(classes.HeaderBurger, classes.active)}>
            <span></span>
        </div >
    );
}

export default HeaderBurger;
