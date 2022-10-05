import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertComponent = () => {
    return(
        <Alert severity="error" className="problem">
            <AlertTitle className="errorText">Technical problem, we are soon back!</AlertTitle>
      </Alert>
    )
}

export default AlertComponent;