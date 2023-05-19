import React from 'react';
import classes from './Text.module.scss'
import classNames from 'classnames';

const Text = ({ text, addProperties }) => {
    return (
        <div className={classNames(classes.Text, addProperties)}>
            {text}
        </div>
    );
}

export default Text;
