import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertComponent = () => {
    return(
        <Alert severity="error" className="loading">
            <AlertTitle className="errorText">Loading...</AlertTitle>
        </Alert>
    )
}

export default AlertComponent;