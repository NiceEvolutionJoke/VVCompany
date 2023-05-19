import React from 'react';
import classes from './Сases.module.scss'
import Title from '../../UI/Title/Title';
import SubTitle from '../../UI/SubTitle/SubTitle';
import Btn from '../../UI/btn/btn';
import CasesMonitor from './UI/СasesMonitor/СasesMonitor';
const casesSubTitleText = 'Мы гордимся нашими успешными проектами и результатами, которые мы достигли для наших клиентов. Посмотрите наши кейсы, чтобы увидеть, как мы помогаем бизнесам добиться успеха в онлайн-сфере.'


const Cases = () => {
    return (
        <section className={classes.cases} id='keys'>
            <div className="_container">
                <div className={classes.casesBlock}>
                    <div className={classes.casesBody}>
                        <Title text='Кейсы' addProperties={classes.casesTitle} />
                        <SubTitle text={casesSubTitleText} addProperties={classes.casesSubTitle} />
                        {window.innerWidth < 1200 ? <div className={classes.casesContent}>
                            <CasesMonitor />
                        </div> : false}
                        <Btn text='Остальные кейсы' addProperties={classes.casesBtn} />
                    </div>
                    {window.innerWidth > 1200 ? <div className={classes.casesContent}>
                        <CasesMonitor />
                    </div> : false}
                </div>
            </div>
        </section>
    );
}

export default Cases;
