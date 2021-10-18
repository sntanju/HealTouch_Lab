import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, img, description, doctor} = props.service;

    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="service-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{doctor}</h4>
            
            </div>
            <div className="button">
            <button className="detail-btn">Details</button>
            </div>
        </div>
    );
};

export default Service;