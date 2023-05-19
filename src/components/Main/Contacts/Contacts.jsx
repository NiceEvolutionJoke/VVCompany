import React from 'react';
import classes from './Contacts.module.scss'
import ContactsBody from './UI/ContactsBody/ContactsBody';
import ContactsForm from './UI/ContactsForm/ContactsForm';
import Title from '../../UI/Title/Title'
import Text from '../../UI/Text/Text';
let ContactsText = 'Хотите узнать больше о наших услугах или начать работу над вашим проектом? Заполните нашу форму обратной связи, и мы свяжемся с вами в ближайшее время.'

const Contacts = () => {
    return (
        <div className={classes.Contacts} id='faq'>
            <div className='_container'>
                <div className={classes.ContactsBlock}>
                    <div className={classes.ContactsContent}>
                        <Title text='Свяжитесь с нами' addProperties={classes.ContactsTitle} />
                        <Text text={ContactsText} addProperties={classes.ContactsText} />
                        <ContactsForm />
                    </div>
                    <ContactsBody />
                </div>
            </div>
        </div>
    );
}

export default Contacts;
