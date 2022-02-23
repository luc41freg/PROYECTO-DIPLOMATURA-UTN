import React from "react";
import logo from '../../img/logo.png'
import '../../syles/components/layout/Header.css'
const Header= (props) =>{

    return(
        <header>
            <div className="holder">
                <div className="logo">
                    <img src={logo} width="100"
                     alt="transportes X" />
                    <h1>Transportes X</h1>
                </div>
            </div>
            </header>
    );
}

export default Header;