import React from "react";
import LegosElement from "../../components/LegosElement";
import MenuElement from "../../components/MenuElement";
import './legos.css';

const Legos = () => {

    return(
        <div className="legosPage">
            <MenuElement />
            <LegosElement />
        </div>
    );
}

export default Legos;