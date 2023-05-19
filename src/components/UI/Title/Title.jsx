import React from 'react';
import classes from './Title.module.scss'
import classNames from 'classnames';

const Title = ({ text, addProperties }) => {
    return (
        <div className={classNames(classes.Title, addProperties)}>
            {text}
        </div>
    );
}

export default Title;
