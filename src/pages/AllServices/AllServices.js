import React from 'react';
import { useParams } from 'react-router';


const AllServices = () => {

    const {serviceId} = useParams();

    return (
        <div>
            <h2>Details of Each Service</h2>
            <h2> This is our service{serviceId}</h2>
            
        </div>
    );
};

export default AllServices;