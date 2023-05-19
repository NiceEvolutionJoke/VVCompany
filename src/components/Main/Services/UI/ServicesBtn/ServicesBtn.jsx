import React from 'react';
import classes from './ServicesBtn.module.scss'
import classNames from 'classnames';

const ServicesBtn = ({ el, setServicesTab, isActive }) => {
    function changeTabContent() {
        setServicesTab(el);
    }
    const btnClasses = classNames(classes.servicesBtn, {
        [classes.active]: isActive
    });
    return (
        <button className={btnClasses} onClick={changeTabContent}>
            {el.title}
        </button>
    );
}

export default ServicesBtn;
