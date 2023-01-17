import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material//FormLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddNewSetComponent = () => {

    return(
        <div>
            <Box
                component="form"
                className='newSetFormBox'
                sx={{'& .MuiTextField-root': { m: 0.5, width: '40vw',  }, py: '30px', textAlign: 'center '}}
                noValidate
                autoComplete="off">

                    <FormControl 
                        action='/localhost/react-lego-project/src/php/addnewlegoitem.php'
                        method='post'
                        >
                        
                        <FormLabel component="legend"
                            sx={{ fontSize: '1.5rem', color: 'black' }}
                        >
                            Upload new set
                        </FormLabel>
            
                        <FormGroup>
                            <TextField
                                id="nameInput"
                                label="Name of the Lego Set"
                                name="name"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                            <TextField
                                id="categoryInput"
                                label="Category"
                                name="category"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                            <TextField
                                id="themeInput"
                                label="Theme"
                                name="theme"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                            <TextField
                                id="serialInput"
                                label="Serial"
                                name="serial"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                            <TextField
                                id="yearInput"
                                label="Year"
                                type="number"
                                name="year"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="piecesInput"
                                label="Pieces"
                                type="number"
                                name="pieces"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="priceInput"
                                label="Price"
                                type="number"
                                name="price"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="stateInput"
                                label="State"
                                name="state"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                            <TextField
                                id="imgUrlInput"
                                label="Image URL"
                                name="imgUrl"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                            <TextField
                                id="imgAltInput"
                                label="Image name"
                                name="imgAlt"
                                style={{ backgroundColor: '#ffe5b4', borderRadius: '5px' }}
                            />
                        </FormGroup>

                        <Button
                                variant="contained"
                                type="submit"
                                className="submitBtn"
                                id="legoSubmitBtn"
                                color="success"
                                sx={{ width: '10vw', mx: 'auto', textShadow: 'black 1px 1px' }}
                                onClick={console.log("clicked")}
                                >
                                Submit
                        </Button>
                    </FormControl>
           </Box>

        </div>
    )
    
}

export default AddNewSetComponent;