import React from 'react';
import Footer from '../AllExist/Footer/Footer';
import Header from '../AllExist/Header/Header';
import TopBar from '../AllExist/TopBar/TopBar';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div className='app-div'>
            <div className='app-div-main'>
            <TopBar></TopBar>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;