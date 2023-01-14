import React from 'react';
import MenuElement from '../../components/MenuElement';
import SelectedItemsListComponent from '../../components/SelectedItemsListComponent';
import RegisterElement from '../../components/RegisterElement';
import './register.css';

const Register = (props) => {
    return (
        <div className='registerPage'>
            <MenuElement />
            <SelectedItemsListComponent content={ props.content } />
            <RegisterElement />
        </div>
    );
};

export default Register;