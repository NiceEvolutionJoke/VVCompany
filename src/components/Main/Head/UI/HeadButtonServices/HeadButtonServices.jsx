import React from 'react';
import classes from "./HeadButtonServices.module.scss"

const HeadButtonServices = ({ text }) => {
    return (
        <a href='' className={classes.head__btn}>
            {text}
        </a>
    );
}

export default HeadButtonServices;
