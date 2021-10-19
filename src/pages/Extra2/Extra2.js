import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Extra2.css';

const Extra2 = () => {
    
    return (
        <div className="extra2">
            <h2> Get <span>20%</span> Discount in Test</h2>
            <h5><b className="healtouch">HealTouch Lab </b>is giving 20% discount for you in all in the test.This offer is ramaining till December 31</h5>
            <h4><b>&#9755;  Take Our Services And Get Your Discount</b></h4>
            <NavLink to="/login"><button className="detail-btn">Get Discount</button></NavLink>
        </div>
    );
};

export default Extra2;