import React from 'react';
import classes from "./HeadButtonPrice.module.scss"
const HeadButtonPrice = ({ text }) => {
    return (
        <a href='' className={classes.head__btn}>
            {text}
        </a>
    );
}

export default HeadButtonPrice;
