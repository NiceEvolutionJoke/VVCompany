import React from 'react';
import classes from './about.module.scss';
import Text from '../../UI/Text/Text';
import Title from '../../UI/Title/Title';
import SubTitle from '../../UI/SubTitle/SubTitle';
import Btn from '../../UI/btn/btn';
let aboutSubtitle = `Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.`
let aboutText = `Мы уже создали более 100 сайтов и веб-сервисов для наших клиентов.
Наша команда состоит из опытных профессионалов в области разработки сайтов и веб-сервисов.`
let aboutText2 = `Мы команда профессионалов, которая специализируется на создании высококачественных сайтов и веб-сервисов для наших клиентов.
Наша миссия - помочь бизнесам вести успешную онлайн-деятельность.
Мы команда профессионалов, которая специализируется на создании высококачественных сайтов и веб-сервисов для наших клиентов. 
Наша миссия - помочь бизнесам вести успешную онлайн-деятельность.`


const About = () => {
    return (
        <section className={classes.about} id="about">
            <div className="_container">
                <div className={classes.aboutBlock}>
                    <div className={classes.aboutBody}>
                        <Title text="О нас" addProperties={classes.aboutTitle} />
                        <SubTitle text={aboutSubtitle} addProperties={classes.aboutSubTitle} />
                        {
                            window.innerWidth < 767 ? (<div className={classes.aboutText}>
                                <Text text={aboutText} addProperties={classes.aboutSubText} />
                                <Text text={aboutText2} />
                            </div>) : false
                        }
                        <Btn text="Заказать услуги" addProperties={classes.aboutBtn} />
                    </div>
                    {
                        window.innerWidth > 767 ? (<div className={classes.aboutText}>
                            <Text text={aboutText} addProperties={classes.aboutSubText} />
                            <Text text={aboutText2} />
                        </div>) : false
                    }
                </div>
            </div>
        </section>
    );
}

export default About;
