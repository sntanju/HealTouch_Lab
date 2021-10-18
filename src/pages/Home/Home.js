import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;