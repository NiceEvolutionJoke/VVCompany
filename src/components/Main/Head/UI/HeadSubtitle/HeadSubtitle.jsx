import React from 'react';
import classes from './HeadSubtitle.module.scss'
const HeadSubtitle = ({ text }) => {
    return (
        <div className={classes.head__subtitle}>
            {text}
        </div>
    );
}

export default HeadSubtitle;
