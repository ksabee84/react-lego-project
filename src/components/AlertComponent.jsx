import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const AlertComponent = () => {
    return(
        <div className="loading">
            <Box sx={{ display: 'block' }}>
                <CircularProgress />
            </Box>
            <Alert className="alertText" severity="error">Loading...</Alert>
        </div>
    );
}

export default AlertComponent;