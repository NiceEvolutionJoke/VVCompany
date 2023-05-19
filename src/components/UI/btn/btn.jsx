import React from 'react';
import classes from './btn.module.scss'
import classNames from 'classnames';

const Btn = ({ text, addProperties }) => {
    return (
        <div className={classNames(classes.btn, addProperties)}>
            {text}
        </div>
    );
}

export default Btn;
