import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const ContactComponent = () => {
    return(
        <div className="contactDiv">
            <Box className="contactBox" sx={{ height: '100%', width: '20vw', mx: 'auto', paddingTop: '30vh' }}>
                    <div className="linkDivs" id="emailDiv">
                        <Link
                            className="link"
                            sx={{ textDecoration: 'none' }}
                            href='mailto:sabeegigant@gmail.com'
                        >
                            Write an e-mail
                        </Link>
                    </div>
                    <div className="linkDivs" id="fbDiv">
                        <Link
                            className="link"
                            href='https://www.facebook.com/sabeesmonster'
                            target="_blank"
                            sx={{ textDecoration: 'none' }}
                        >
                            Facebook
                        </Link>
                    </div>
            </Box>
        </div >
    )
}

export default ContactComponent;