import React from 'react';
import './NotFound.css'
import errorImage from './error.png'
const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="error-content text-center">
                            <img src={errorImage} className='img-fluid' alt="" />
                            <h1 className='fw-bold my-3'>Page Not Found! </h1>
                            <p>Please try searching for some other page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;