import React from 'react';
import MenuElement from '../../components/MenuElement';
import SelectedItemsListComponent from '../../components/SelectedItemsListComponent';
import RegisterElement from '../../components/RegisterElement';
import Link from '@mui/material/Link';
import './register.css';

const Register = (props) => {
    return (
        <div className='registerPage'>
            <MenuElement />
            <SelectedItemsListComponent content={ props.content } />
            <div className='regTitle'>
                <Link href="http://localhost/react-lego-project/src/php/register.php">
                    Please click to fill in this form to registrate
                </Link>
            </div>
            <RegisterElement />
        </div>
    );
};

export default Register;