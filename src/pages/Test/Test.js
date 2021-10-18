import React from 'react';

const Test = (props) => {

    const {name, img, doctor} = props.service;

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Test;