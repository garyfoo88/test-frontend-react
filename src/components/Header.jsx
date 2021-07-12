import React from "react";
import '../styles/components/header.scss'

function Header() {
    return (
        <div className="header-container">
            <img className="logo" alt="SpeedDoc Logo" src={process.env.REACT_APP_LOGO_SVG} />
        </div>
    );
}

export default Header;
