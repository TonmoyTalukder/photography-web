import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';

const Home = () => {
    return (
        <div id="home" className="home">
            <Header></Header>
            {/* <Banner></Banner> */}
            <About></About>
        </div>
    );
};

export default Home;