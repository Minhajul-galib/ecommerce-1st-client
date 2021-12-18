import React, { useEffect, useRef } from 'react';
import Footer from '../../AllExist/Footer/Footer';
import Header from '../../AllExist/Header/Header';
import TopBar from '../../AllExist/TopBar/TopBar';
import lottie from "lottie-web";
import { Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Registration.css'


const Registration = () => {
    const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../image/Registration.json')
        })
        
    }, [])

    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <div className='Registration d-md-flex'>

            <div id='registration-ani' className='w-50' ref={container}></div>

            <div className='registration-from notFound'>
                    <h5 style={{textAlign: 'center', padding: '3% 0 4%', color: 'white'}}>Registration Here</h5>
                    <form>

                        <div style={{width:'90%', margin: 'auto'}} className='mb-2'>
                        <TextField 
                        style={{width:'100%'}}
                        id="reg-input"
                        type="text" 
                        label="Full Name"
                        // onChange={handleImage}
                        // value={image} 
                        variant="filled" 
                        required
                        />
                        </div>

                        <div style={{width:'90%', margin: 'auto'}} className='mb-2'>
                        <TextField 
                        style={{width:'100%'}}
                        id="reg-input"
                        type="email" 
                        label="Your Email"
                        // onChange={handleImage}
                        // value={image} 
                        variant="filled" 
                        required
                        />
                        </div>

                        <div style={{width:'90%', margin: 'auto'}} className='mb-2'>
                        <TextField 
                        style={{width:'100%'}}
                        id="reg-input"
                        type="number" 
                        label="Phone Number"
                        // onChange={handleImage}
                        // value={image} 
                        variant="filled" 
                        />
                        </div>
                        

                        <Button id='product-btn' type='submit' variant="contained" endIcon={<AddCircleIcon />}>
                        Add Products
                        </Button>

                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;