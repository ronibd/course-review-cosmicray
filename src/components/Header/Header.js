import React from 'react';
import image from './header.jpeg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faLaptopCode} />
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                    <NavLink className="navbar-brand text-success fw-bold
                    " to="/home"> {element} Cosmicray-Programming</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <NavLink className='nav-link' to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className='nav-link'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/services' className='nav-link'>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header-top">
                <div className="container">
                    <h1 className='text-light'>You Can Learn Best and Easy Way Programming by <span className='text-warning'>Cosmicray-Programming </span> </h1>
                </div>

            </div>
        </div>
    );
};

export default Header;