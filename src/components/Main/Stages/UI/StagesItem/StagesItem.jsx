import React from 'react';
import classes from './StagesItem.module.scss'

const StagesItem = ({ id, text, name }) => {
    return (
        <div className={classes.StagesItem}>
            <div className={classes.StagesItemNum}>
                {id}.
            </div>
            <div className={classes.StagesItemName}>
                {name}
            </div>
            <div className={classes.StagesItemText}>
                {text}
            </div>
        </div>
    );
}

export default StagesItem;
