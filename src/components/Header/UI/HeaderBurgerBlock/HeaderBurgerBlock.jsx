import React from 'react';
import classes from './HeaderBurgerBlock.module.scss'
import HeaderLink from '../HeaderLink/HeaderLink';
import classNames from 'classnames';
import Btn from '../../../UI/btn/btn';

const HeaderBurgerBlock = ({ isMenuOpen }) => {
    return (
        <div className={isMenuOpen ? classes.HeaderBurgerBlock : classNames(classes.HeaderBurgerBlock, classes.active)}>
            <HeaderLink nameLink='О нас' hrefLink='#about' addProperties={classes.headerBurgerLink} />
            <HeaderLink nameLink='Наши услуги' hrefLink='#services' addProperties={classes.headerBurgerLink} />
            <HeaderLink nameLink='Кейсы' hrefLink='#keys' addProperties={classes.headerBurgerLink} />
            <HeaderLink nameLink='Этапы' hrefLink='#points' addProperties={classes.headerBurgerLink} />
            <HeaderLink nameLink='Наши преимущества' hrefLink='#advantages' addProperties={classes.headerBurgerLink} />
            <HeaderLink nameLink='F.A.Q' hrefLink='#faq' addProperties={classes.headerBurgerLink} />
            <Btn text='услуга' addProperties={classes.headerBurgerBtn} />
        </div>
    );
}

export default HeaderBurgerBlock;
