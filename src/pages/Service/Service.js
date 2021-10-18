import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id, name, img, description, doctor} = props.service;

    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="service-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{doctor}</h4>
            
            </div>
            <div className="button">
            <Link to={`/allservices/${id}`}>
            <button className="detail-btn">Choose {name}</button></Link>
            </div>
        </div>
    );
};

export default Service;