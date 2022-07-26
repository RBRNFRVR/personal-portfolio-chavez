import React from 'react';
import "/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/Navbar.css"
import { Link, useLocation } from 'react-router-dom';



export const Navbar = () => {
    let path = useLocation().pathname

    return (
        <div className="navbar">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <Link className={`${path==='/'&& 'active'} nav-link`} id="pills-home-tab"  data-toggle="pill" to="/" role="tab" aria-controls="pills-home" aria-selected="true" style={{color:'white'}}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`${path==='/portfolio'&& 'active'} nav-link`} id="pills-portfolio-tab" data-toggle="pill" to="/portfolio" role="tab" aria-controls="pills-portfolio" aria-selected="false" style={{color:'white'}}>Portfolio</Link>
                 </li>
                <li class="nav-item">
                    <Link className={`${path==='/contact'&& 'active'} nav-link`} id="pills-contact-tab" data-toggle="pill" to="/contact" role="tab" aria-controls="pills-contact" aria-selected="false" style={{color:'white'}}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}
