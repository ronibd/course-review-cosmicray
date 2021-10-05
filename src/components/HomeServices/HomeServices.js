import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const[homeServices, sethomeServices] =  useState([]);
    useEffect( () => {
        const url = './services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => sethomeServices(data))
    }, []);
    return (
        <div className='services-body'>
            <div className="section-title">
                <h2 className='fw-bold p-2'>Courses </h2>
            </div>
            <div className="container">
                 <div className="row"> 
                 
                        {
                            homeServices.map(homeService  => 
                            <HomeService 
                                key = {homeService.id}
                                homeService = {homeService}
                            ></HomeService> ) 
                            
                        }
                         
                 </div>
            </div> 
                    
        </div> 
    );
};

export default HomeServices;