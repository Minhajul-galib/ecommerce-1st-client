import React, { useEffect, useRef, useState } from 'react';
import lottie from "lottie-web";
import Footer from '../../AllExist/Footer/Footer';
import Header from '../../AllExist/Header/Header';
import TopBar from '../../AllExist/TopBar/TopBar';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';

const LogIn = () => {
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

    const [regData, setRegData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = {...regData};
        newRegData[field] = value;
        setRegData(newRegData);

    }

    const handleRegSubmit = e =>{
        loginUser(regData.email, regData.password, location, history);
        e.preventDefault();
    }
    

    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <div className='Registration d-md-flex'>

            <div id='registration-ani' className='w-50' ref={container}></div>

            <div style={{height: '100%', marginTop: '10%'}} className='registration-from notFound'>
                    <h5 style={{textAlign: 'center', padding: '3% 0 4%', color: 'white'}}>Login Here</h5>
                    { !isLoading && 
                    <form onSubmit={handleRegSubmit}>

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
                    type="password" 
                    label="Password"
                    onBlur={handleOnBlur}
                    name="password"
                    variant="filled" 
                    />
                    </div>
                    
                    <Button id='product-btn' type='submit' variant="contained" endIcon={<SendIcon />}>
                    SUBMIT
                    </Button>
                </form>
                    }

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="success">Congratulation! user successfully Loge In</Alert>}

                    {authError && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="error">This is an error message!</Alert>}

                        <h6 style={{marginTop: '4%', color:'white'}} >New User? Please Registration now <Link style={{textDecoration: 'none'}} to='/registration' ><Button color="secondary" variant="contained">Register</Button></Link></h6>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LogIn;
