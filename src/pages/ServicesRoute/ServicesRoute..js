import React from 'react';
import './ServicesRoute.css';

const ServicesRoute = (props) => {

    const {id, name, img, description, doctor} = props.service;

    return (
        <div>
           
            <div className="service serve">
            <img src={img} alt="" />
            <div className="service-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{doctor}</h4>
            
            </div>
            

            </div>
        </div>
    );
};

export default ServicesRoute;