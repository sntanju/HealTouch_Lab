import React from 'react';
import { useParams } from 'react-router';


const AllServices = () => {

    const {serviceId} = useParams();
    
    return (
        <div>

            <h2>Details of Each Service</h2>           
            <h4> This is our service{serviceId}</h4>
            
        </div>
    );
};

export default AllServices;