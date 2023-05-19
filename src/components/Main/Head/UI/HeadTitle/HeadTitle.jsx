import React from 'react';
import classes from './HeadTitle.module.scss'

const HeadTitle = ({ text }) => {
    return (
        <div className={classes.head__title}>
            {text}
        </div>
    );
}

export default HeadTitle;
