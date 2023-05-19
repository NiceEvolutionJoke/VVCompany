import React from 'react';
import Head from './Head/Head';
import About from './About/About';
import Services from './Services/Services';
import Cases from './Сases/Сases';
import Stages from './Stages/Stages';
import Advantages from './Advantages/Advantages';
import Contacts from './Contacts/Contacts';

const Main = () => {
    return (
        <div className='main'>
            <Head />
            <About />
            <Services />
            <Cases />
            <Stages />
            <Advantages />
            <Contacts />
        </div>
    );
}

export default Main;
