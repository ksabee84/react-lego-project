import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterElement = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");

    return (
        <div className='register'>
           <Box component="form"
                className='registerFormBox'
                sx={{'& .MuiTextField-root': { m: 1, width: '30vw' },}}
                noValidate
                autoComplete="off">

                <p className="regTitle">Please Fill in This Form to Registrate</p>

                <div className="inputs">
                    <TextField
                        required
                        id="nameInput"
                        label="Your Name"
                        helperText="Please write your name (Required)"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="emailInput"
                        label="Your E-mail Address"
                        helperText="Please write your e-mail address (Required)"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="phoneNoInput"
                        label="Your Phone Number"
                        helperText="Please write your phone number"
                        size="small"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                    />
                    <TextField
                        required
                        id="addressInput"
                        label="Your Address"
                        helperText="Please write your address (Required)"
                        size="small"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        required
                        type="password"
                        id="passwordInput"
                        label="Password"
                        helperText="Please type a password (Required)"
                        size="small"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    />
                    <TextField
                        required
                        type="password"
                        id="pwd2Input"
                        label=" Password Again"
                        helperText="Please type the password again (Required)"
                        size="small"
                        value={pwd2}
                        onChange={(e) => setPwd2(e.target.value)}
                    />
                    </div>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            type="small"
                            className="submitBtn"
                            id="submitBtn"
                            color="success"
                            onClick={(e) => console.log("clicked")}>
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            type="small"
                            className="submitBtn"
                            id="alreadyRegBtn">
                            Already Registered
                        </Button>
                    </div>
           </Box>
        </div>
    );
}

export default RegisterElement;