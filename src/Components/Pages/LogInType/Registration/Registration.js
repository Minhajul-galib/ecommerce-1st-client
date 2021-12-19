import React, { useState, useEffect, useRef } from 'react';
import Footer from '../../AllExist/Footer/Footer';
import Header from '../../AllExist/Header/Header';
import TopBar from '../../AllExist/TopBar/TopBar';
import lottie from "lottie-web";
import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Registration.css'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


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
        
    }, []);

    const [regData, setRegData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = {...regData};
        newRegData[field] = value;
        setRegData(newRegData);
    }

    const handleRegSubmit = e =>{
        if(regData.password !== regData.password2){
            alert('password not matched')
            return;
        }
        registerUser(regData.email, regData.password, regData.name, history)
        e.preventDefault();
    }

    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <div className='Registration d-md-flex'>

            <div id='registration-ani' className='w-50' ref={container}></div>

            <div className='registration-from notFound'>
                    <h5 style={{textAlign: 'center', padding: '3% 0 4%', color: 'white'}}>Registration Here</h5>
                    <form onSubmit={handleRegSubmit}>

                        <div style={{width:'90%', margin: 'auto'}} className='mb-2'>
                        <TextField 
                        style={{width:'100%'}}
                        id="reg-input"
                        type="text" 
                        label="Full Name"
                        onBlur={handleOnBlur}
                        name="name"
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
                        onBlur={handleOnBlur}
                        name="email"
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
                        onBlur={handleOnBlur}
                        name="phone"
                        variant="filled" 
                        />
                        </div>
                        
                        <div style={{width:'90%', margin: 'auto'}} className='mb-2'>
                        <TextField 
                        style={{width:'100%'}}
                        id="reg-input"
                        type="password" 
                        label="Password"
                        onBlur={handleOnBlur}
                        name="password"
                        variant="filled" 
                        />
                        </div>
                        
                        <div style={{width:'90%', margin: 'auto'}} className='mb-2'>
                        <TextField 
                        style={{width:'100%'}}
                        id="reg-input"
                        type="password" 
                        label="Confirm Password"
                        onBlur={handleOnBlur}
                        name="password2"
                        variant="filled" 
                        />
                        </div>
                        

                        <Button id='product-btn' type='submit' variant="contained" endIcon={<AddCircleIcon />}>
                        SUBMIT
                        </Button>

                    </form>
                    {isLoading && <CircularProgress />}
                        
                        {user?.email && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="success">Congratulation! user successfully registered</Alert>}

                        {authError && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="error">This is an error message!</Alert>}

                        <h6 style={{marginTop: '4%', color:'white'}} > Already registered? go to login <Link style={{textDecoration: 'none'}} to='/login' ><Button color="secondary" variant="contained">LOGIN</Button></Link></h6>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;