import React, { useEffect, useState } from 'react';
import './ShowServices.css';
import ServicesRoute from '../ServicesRoute/ServicesRoute.';


const ShowServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[]);



    return (
        <div>
            <h2 className="all-services">All Of Our Services</h2>
            
        <div className="services">
            
        {
            services.map(service => <ServicesRoute
            key = {service.id}
            service={service}
            ></ServicesRoute>)
            }
            
        </div>
        </div>
    );
};

export default ShowServices;