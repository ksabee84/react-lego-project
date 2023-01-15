import React from "react";
import MenuElement from "../../components/MenuElement";
import HomeComponent from "../../components/HomeComponent";
import './home.css';

const Home = () => {
    return(
        <div className="landingPageDiv">
            <MenuElement />
            <HomeComponent />
        </div>
    );
}

export default Home;