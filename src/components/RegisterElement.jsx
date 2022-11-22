import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterElement = () => {
    return (
        <div className='register'>
           <Box component="form"
                className='registerFormBox'
                sx={{'& .MuiTextField-root': { m: 1, width: '30vw' },}}
                noValidate
                autoComplete="off">

                <h3 className="regTitle">Please Fill in This Form to Registrate</h3>

                <div className="inputs">
                    <TextField
                        required
                        id="nameInput"
                        label="Your Name (Required)"
                        defaultValue="Your Name"
                    />
                    <TextField
                        required
                        id="emailInput"
                        label="Your E-mail Address (Required)"
                        defaultValue="Your E-mail Address"
                    />
                    <TextField
                        id="phoneNoInput"
                        label="Your Phone Number"
                        defaultValue="Your Phone Number"
                    />
                    <TextField
                        required
                        id="passwordInput"
                        label="Password (Required)"
                        type="password"
                    />
                    <TextField
                        required
                        id="pwd2Input"
                        label="Password Again (Required)"
                        type="password"
                    />
                    <Button
                        variant="contained"
                        type="large"
                        className="submitBtn">
                        Submit
                    </Button>
                </div>
           </Box>
        </div>
    );
}

export default RegisterElement;