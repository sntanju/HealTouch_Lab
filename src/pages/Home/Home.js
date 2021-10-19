import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Extra1 from '../Extra1/Extra1';
import Extra2 from '../Extra2/Extra2';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Extra2></Extra2>
            <Extra1></Extra1>
        </div>
    );
};

export default Home;