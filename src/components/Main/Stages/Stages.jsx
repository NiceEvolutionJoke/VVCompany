import React from 'react';
import classes from './Stages.module.scss'
import StagesItem from './UI/StagesItem/StagesItem';
import Title from '../../UI/Title/Title';
import Text from '../../UI/Text/Text';

const stagesText = 'Мы следуем определенным этапам при разработке сайта, чтобы гарантировать высокое качество и удовлетворение наших клиентов. Мы начинаем с анализа вашего бизнеса и целей, а затем создаем дизайн и разрабатываем сайт.'
const Stages = () => {
    const itemList = [
        {
            id: 1,
            name: 'Основной этап',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            id: 2,
            name: 'Технический этап',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            id: 3,
            name: 'Дизайн',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
        {
            id: 4,
            name: 'Общее представление',
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. ',
        },
    ]


    return (
        <section className={classes.Stages} id='points'>
            <div className='_container'>
                <div className={classes.StagesBlock}>
                    <Title text='Этапы создания сайта:' addProperties={classes.StagesTitle} />
                    <Text text={stagesText} addProperties={classes.StagesText} />
                    <div className={classes.Stages__items}>
                        {itemList.map((el) => {
                            return <StagesItem id={el.id} name={el.name} text={el.text} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stages;
