import React from "react";
import {NavLink} from 'react-router-dom';
import '../../syles/components/layout/Nav.css'

const Nav = (props) =>{
    return(
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" to ="/" >Home</NavLink></li>
                    <li><NavLink activeClassName="activo" to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
            </nav>
    );
}

export default Nav;