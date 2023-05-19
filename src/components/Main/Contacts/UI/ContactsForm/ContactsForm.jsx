import React from 'react';
import classes from './ContactsForm.module.scss'

const ContactsForm = () => {
    return (
        <form action='' className={classes.ContactsForm}>
            <div className={classes.ContactsFormInputBlock}>
                <div className={classes.ContactsFormSubTitle}>
                    Ваше имя
                </div>
                <input type="text" className={classes.ContactsFormInput} />
            </div>
            <div className={classes.ContactsFormInputBlock}>
                <div className={classes.ContactsFormSubTitle}>
                    Контактный телефон
                </div>
                <input type="text" className={classes.ContactsFormInput} />
            </div>
            <button className={classes.ContactsFormButton}>
                Заказать звонок
            </button>
        </form>
    );
}

export default ContactsForm;
