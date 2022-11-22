import React from 'react';
import MenuElement from '../../components/MenuElement';
import RegisterElement from '../../components/RegisterElement';
import './register.css';

const Register = () => {
    return (
        <div className='registerPage'>
            <MenuElement />
            <RegisterElement />
        </div>
    );
};

export default Register;
