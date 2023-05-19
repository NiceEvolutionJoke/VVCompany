import React, { useState } from 'react';
import HeaderLink from './UI/HeaderLink/HeaderLink';
import HeaderLogo from './UI/HeaderLogo/HeaderLogo';
import classes from "./header.module.scss"
import HeaderBurger from './UI/HeaderBurger/HeaderBurger';
import HeaderBurgerBlock from './UI/HeaderBurgerBlock/HeaderBurgerBlock';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    function toggleMenuMode() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className='header'>
            <div className="_container">
                <div className={classes.header__block}>
                    <HeaderLogo />
                    <div className={classes.header__links}>
                        <HeaderLink nameLink='О нас' hrefLink='#about' />
                        <HeaderLink nameLink='Наши услуги' hrefLink='#services' />
                        <HeaderLink nameLink='Кейсы' hrefLink='#keys' />
                        <HeaderLink nameLink='Этапы' hrefLink='#points' />
                        <HeaderLink nameLink='Наши преимущества' hrefLink='#advantages' />
                        <HeaderLink nameLink='F.A.Q' hrefLink='#faq' />
                    </div>
                    <HeaderBurger isMenuOpen={isMenuOpen} toggleMenu={toggleMenuMode} />
                    <HeaderBurgerBlock isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>
        </div>
    );
}

export default Header;
