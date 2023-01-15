import React from 'react';
import ContactComponent from '../../components/ContactComponent';
import MenuElement from '../../components/MenuElement';
import './contact.css';

const Contact = () => {
    return (
        <div className='contactPage'>
            <MenuElement />
            <ContactComponent />
        </div>
    );
};

export default Contact;