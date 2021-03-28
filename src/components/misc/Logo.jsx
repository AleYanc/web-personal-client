import React from 'react';
import {NavLink} from 'react-router-dom';
import './misc.scss';

const Logo = () => {
    return ( 
        <div className="logo">
            <div className="graph"></div>
            <NavLink to="/" className="name">Alejo Yanczuk</NavLink>
        </div>
        
    );
}
 
export default Logo;