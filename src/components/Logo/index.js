import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

function ReactLogo(props){
    return(
        <Link to="/" className="MainLogo">
            <img src={Logo} alt="Company Branding" />
        </Link>  
    )
} 
export default ReactLogo; 