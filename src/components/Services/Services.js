import React, { useEffect, useState } from 'react';
import './Services.css';
import img from './js.png';
import pythonImg from './pyhton2.png';
import cImage from './cp.png';
import phpImage from './php.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Service from '../Service/Service';
const element = <FontAwesomeIcon icon={faLaptopCode} />

const Services = () => {
    const[services, setServices] =  useState([]);
    useEffect( () => {
        const url = './services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='services-body'>
            <div className="section-title">
                <h2 className='fw-bold p-2'>Courses </h2>
            </div>
            <div className="container">
                 <div className="row"> 
                 
                        {
                            services.slice(0, 4).map(service  =>  
                            <Service 
                            key = {service.id}
                            service = {service}
                            ></Service> ) 
                            
                        }
                         
                 </div>
            </div> 
                    
        </div> 
    );
};

export default Services;