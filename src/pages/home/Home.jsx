import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return(
        <div className="landingPageDiv">
            <div className="welcome">
                <h2>Welcome to the World of LEGO!</h2>
                <p>Here you can browse and buy a huge selection of LEGO sets!</p>
            </div>

            <Button size="large" variant="contained" className="enterButton">
                <Link to='/legos' className="links">ENTER</Link>
            </Button>
            
            <p className="footer">Károly Szabolcs © 2022</p>
        </div>
        
    );
}

export default Home;