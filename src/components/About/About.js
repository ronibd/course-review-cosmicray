import React from 'react';
import './About.css'
import image from './programming.jpg'
const About = () => {
    return (
        <div className='about-body'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-img">
                            <img src={image} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <h2 className='fw-bold mb-3'>Achieve Your Goals With Easy-Programming</h2>
                        <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered. </p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;