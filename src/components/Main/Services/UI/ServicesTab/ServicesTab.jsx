import React from 'react';
import classes from './ServicesTab.module.scss'
import Btn from '../../../../UI/btn/btn';
const ServicesTab = ({ servicesTab }) => {

    return (
        <div className={classes.servicesTab}>

            <div className={classes.servicesTabTop}>
                <div className={classes.servicesTabTitle}>{servicesTab.title}</div>
                <div className={classes.servicesTabPrice}>{servicesTab.price}</div>
            </div>
            <div className={classes.servicesTabSubTitle}>{servicesTab.subtitle}</div>
            <ul className={classes.servicesTabList}>
                {
                    servicesTab.services.map((el) => (
                        <li key={el.text} className={classes.servicesTabLi}>
                            <div className={classes.servicesTabCheck}>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.46429L4.38462 10L13 1" stroke="#5685FF" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className={classes.servicesTabLiText}>{el.text}</div>
                        </li>
                    )
                    )
                }
            </ul>
            <Btn text="Заказать услугу" addProperties={classes.servicesTabBtn} />
        </div >
    );
}

export default ServicesTab;
