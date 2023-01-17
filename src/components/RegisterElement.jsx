import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const RegisterElement = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");

    return (
        <div className='register'>
           <Box
                component="form"
                className='registerFormBox'
                action="http://localhost/react-lego-project/src/php/register.php"
                sx={{'& .MuiTextField-root': { m: 1, width: '30vw' },}}
                noValidate
                autoComplete="off">

                <h3 className="regTitle">Please Fill in This Form to Registrate</h3>

                <div className="inputs">
                <TextField
                        required
                        id="nameInput"
                        name="name"
                        label="Your Name"
                        helperText="Please write your name (Required)"
                        size="small"
                        style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="usernameInput"
                        name="username"
                        label="Your Username"
                        helperText="Please write your username (Required)"
                        size="small"
                        style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        id="emailInput"
                        name="email"
                        label="Your E-mail Address"
                        helperText="Please write your e-mail address (Required)"
                        size="small"
                        style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="addressInput"
                        name="address"
                        label="Your Address"
                        helperText="Please write your address (Required)"
                        size="small"
                        style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        required
                        type="password"
                        id="pwd1"
                        name="pwd1"
                        label="Password"
                        helperText="Please type a password (Required)"
                        size="small"
                        style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                        value={pwd1}
                        onChange={(e) => setPwd1(e.target.value)}
                    />
                    <TextField
                        required
                        type="password"
                        id="pwd2"
                        name="pwd2"
                        label=" Password Again"
                        helperText="Please type the password again (Required)"
                        size="small"
                        style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                        value={pwd2}
                        onChange={(e) => setPwd2(e.target.value)}
                    />
                    </div>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            type="submit"
                            className="submitBtn"
                            id="submit"
                            name="reg"
                            color="success"
                            sx={{ textShadow: 'black 1px 1px' }}
                            onClick={(e) => console.log("clicked")}
                            >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            type="small"
                            className="submitBtn"
                            id="alreadyRegBtn"
                            sx={{ textShadow: 'black 1px 1px' }}
                            >
                            <Link href="http://localhost/react-lego-project/src/php/login.php">
                                Already Registered
                            </Link> 
                        </Button>
                    </div>
           </Box>
        </div>
    );
}

export default RegisterElement;