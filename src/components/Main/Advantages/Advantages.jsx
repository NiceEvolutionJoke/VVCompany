import React, { useState } from 'react';
import Title from '../../UI/Title/Title';
import Text from '../../UI/Text/Text';
import AdvantagesItem from './UI/AdvantagesItem';
import iconAdvantages from '../../../assets/advantages/icon.png';
import classes from './Advantages.module.scss';
const AdvantagesText = 'Наша команда - это профессионалы своего дела, которые используют самые современные технологии и инструменты для разработки сайтов и веб-сервисов. Мы гарантируем высокое качество и точность в нашей работе.'


const Advantages = () => {
    const [showMore, setShowMore] = useState(false);
    const AdvantagesMobileItemList = [];
    const AdvantagesItemList = [
        {
            src: iconAdvantages,
            title: 'Lorem Ipsum',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            src: iconAdvantages,
            title: 'Lorem Ipsum',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            src: iconAdvantages,
            title: 'Lorem Ipsum',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            src: iconAdvantages,
            title: 'Lorem Ipsum',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            src: iconAdvantages,
            title: 'Lorem Ipsum',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            src: iconAdvantages,
            title: 'Lorem Ipsum',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
    ]


    const handleShowMore = () => {
        setShowMore(true);
    };
    function mobilegenerate(el) {
        AdvantagesMobileItemList[AdvantagesMobileItemList.length] = el;
    }
    return (
        <section className={classes.Advantages} id='advantages'>
            <div className='_container'>
                <div className={classes.AdvantagesBlock}>
                    <Title text="Наши преимущества" addProperties={classes.AdvantagesTitle} />
                    <Text text={AdvantagesText} addProperties={classes.AdvantagesText} />
                    <div className={classes.AdvantagesItems}>
                        {window.innerWidth > 767 ? (
                            AdvantagesItemList.map((el) => {
                                return <AdvantagesItem key={el} text={el.text} title={el.title} srcImg={el.src} />;
                            })
                        ) : (
                            <>
                                {AdvantagesItemList.map((el, index) => {
                                    if (index >= 3) {
                                        mobilegenerate(el);
                                        return null;
                                    } else {
                                        return <AdvantagesItem key={el} text={el.text} title={el.title} srcImg={el.src} />;
                                    }
                                })}
                                {showMore && AdvantagesMobileItemList.map((el) => (
                                    <AdvantagesItem key={el} text={el.text} title={el.title} srcImg={el.src} />
                                ))}
                                {!showMore && (
                                    <div className={classes.AdvantagesBtn} onClick={handleShowMore}>
                                        Показать еще
                                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L8.5 8L16 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
