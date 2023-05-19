import React from 'react';
import classes from './HeaderLink.module.scss'
import classNames from 'classnames';

const HeaderLink = ({ nameLink, hrefLink, addProperties }) => {
    return (
        <a href={hrefLink} className={classNames(classes.header__link, addProperties)}>
            {nameLink}
        </a>
    );
}

export default HeaderLink;
