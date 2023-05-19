import React from 'react';
import classes from './СasesMonitor.module.scss';
import bigMonitor from '../../../../../assets/cases/bigMonitor.svg'
import MiniMonitor from '../../../../../assets/cases/miniMonitor.svg'

const CasesMonitor = () => {
    return (
        <div className={classes.casesMonitor}>
            <div className={classes.casesMonitorMini}>
                <img src={MiniMonitor} alt="" />
            </div>
            <div className={classes.casesMonitorBig}>
                <img src={bigMonitor} alt="" />

                <iframe className={classes.casesMonitorBigIframe} src="https://neocoder.ru" ></iframe>
            </div>
        </div>
    );
}

export default CasesMonitor;
