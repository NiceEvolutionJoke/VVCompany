import React from 'react';
import classes from './head.module.scss'
import HeadTitle from './UI/HeadTitle/HeadTitle';
import HeadSubtitle from './UI/HeadSubtitle/HeadSubtitle';
import HeadButtonPrice from './UI/HeadButtonPrice/HeadButtonPrice';
import HeadButtonServices from './UI/HeadButtonServices/HeadButtonServices';
import HeadAnimation from './UI/HeadAnimation/HeadAnimation';
import img from '../../../assets/nero.gif'

const Head = () => {
    return (
        <section className={classes.head}>
            <div className="_container">
                <div className={classes.head__block}>
                    <div className={classes.head__body}>
                        <HeadTitle
                            text="Создание и разработка 
                            сайтов/Web-сервисов под ключ."
                        />
                        {/* <div className={classes.head__back}>
                            <div className={classes.head__img}><img src={img} alt="" /></div>
                            <div className={classes.head__subback}></div>
                        </div> */}
                        <HeadSubtitle text="Бюджет от 25000 рублей" />
                        <div className={classes.head__btns}>
                            <HeadButtonServices text="Заказать услуги" />
                            <HeadButtonPrice text="Смотреть цены" />
                        </div>
                    </div>
                    <div className={classes.head__animation}>
                        <HeadAnimation />
                    </div>
                    {/*                    <Canvas>
                        <NeuralNetworkAnimation />
                    </Canvas> */}

                </div>
            </div>
        </section>
    );
}

export default Head;
