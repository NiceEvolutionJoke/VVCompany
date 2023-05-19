import React from 'react';
import classes from './AdvantagesItem.module.scss'

const AdvantagesItem = ({ srcImg, title, text }) => {
    return (
        <div className={classes.AdvantagesItem}>
            <div className={classes.AdvantagesItemIcon}>
                <img src={srcImg} alt="" />
            </div>
            <div className={classes.AdvantagesItemTitle}>
                {title}
            </div>
            <div className={classes.AdvantagesItemText}>
                {text}
            </div>
        </div>
    );
}

export default AdvantagesItem;
