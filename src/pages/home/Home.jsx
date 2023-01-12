import React from "react";
import MenuElement from "../../components/MenuElement";
import './home.css';

const Home = () => {
    return(
        <div className="landingPageDiv">
            <MenuElement />
            <div className="welcome">
                <h1>LEGO4ALL</h1>
                <h2>Welcome to the World of LEGO!</h2>
                <p className="lego">Here you can browse and buy a huge selection of LEGO sets!</p>
            </div>
            
            <div className="footer">
                <p>Szabolcs Károly © 2023</p>
                <p>Contact: sabeegigant@gmail.com</p>
            </div>
        </div>
    );
}

export default Home;