import React from 'react';
import { useParams } from 'react-router';


const AllServices = () => {

    const {serviceId} = useParams();

    return (
        <div>
            <h2> this is {serviceId}</h2>
        </div>
    );
};

export default AllServices;