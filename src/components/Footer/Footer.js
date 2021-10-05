import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faLaptopCode} />
const Footer = () => {
    return (
        <div className='footer-body text-light'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-start">
                        <div className="logo-footer mb-3">
                            <a class="navbar-brand text-warning fw-bold " href="/home">
                                {element} Cosmicray-Programming
                            </a>
                        </div>
                        <p>Easy lesson and thinking ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        <div className="social-link">
                            <NavLink className='text-warning' to="https://www.facebook.com/abunoman.bd">Facebook</NavLink>
                            <NavLink className='text-warning' to="/facebook">LinkedIn</NavLink>
                            <NavLink className='text-warning' to="/facebook">Twitter</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>Cources</h3>
                        <div className="cources-item">
                            <a href="/web">Web Design</a>
                            <a href="/webdev">Web Development</a>
                            <a href="/python">Python</a>
                            <a href="/javascript">Javascript</a>
                            <a href="/react">React</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>Subscriptoin</h3>
                        <input type="text" className='form-control ' />
                        <button className='btn btn-primary mt-3'>Subcribe</button>
                    </div>
                </div>
            </div>
            <div className="copyright p-2 bg-secondary">
                <p>Copyright &copy; ALl Right Resered <span className='text-warning'>Cosmicray-Programming</span> </p>
            </div>
        </div>
    );
};

export default Footer;