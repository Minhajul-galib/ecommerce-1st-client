import React from 'react';
import TopBar from '../../Pages/AllExist/TopBar/TopBar'
import Header from '../../Pages/AllExist/Header/Header'
import Footer from '../../Pages/AllExist/Footer/Footer'
import { useEffect } from 'react';
import lottie from "lottie-web";
import { useRef } from 'react';
import './About.css'


const About = () => {
    const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../image/about.json')
        })
        
    }, [])
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <div>
                <div>
                    <div className='d-flex about-content'>
                        <div className='about-content-div'>
                            <h2>ABOUT US</h2>
                            <p>We have many products please select you favorite one</p>
                        </div>
                        <div className='about-content-div1'>
                            <div className="w-100 not-found" ref={container}></div>
                        </div>
                    </div>
                    <div className='about-contents'>
                        <div className='about-content-2'>
                            {/* content! */}
                        <h3>Our Services</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to</p>
                        <br />
                        <p>That's right, you can now download the long awaited OpenCart version 2.0. With the help of developers from around the world, thousands of development hours have gone into making sure that this is the best version of OpenCart yet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;