import React from 'react';
import MenuElement from '../../components/MenuElement';
import SelectedItemsComponent from '../../components/SelectedItemsComponent';
import RegisterElement from '../../components/RegisterElement';
import './register.css';

const Register = () => {
    return (
        <div className='registerPage'>
            <MenuElement />
            <SelectedItemsComponent />
            <RegisterElement />
        </div>
    );
};

export default Register;