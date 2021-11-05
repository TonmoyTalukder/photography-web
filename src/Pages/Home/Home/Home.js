import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';

const Home = () => {
    return (
        <div id="home" className="custom-home">
            <Header></Header>
            <About></About>
        </div>
    );
};

export default Home;