import React from 'react';
import classes from './SubTitle.module.scss'
import classNames from 'classnames';

const SubTitle = ({ text, addProperties }) => {
    return (
        <div className={classNames(classes.SubTitle, addProperties)}>
            {text}
        </div>
    );
}

export default SubTitle;
