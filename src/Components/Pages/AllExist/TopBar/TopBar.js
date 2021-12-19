import React from 'react';
import logo from '../../../../image/logo.png'
import cart from '../../../../image/cart.png'
import signIn from '../../../../image/signIn.png'
import './TopBar.css'
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
// import { Link } from '@mui/material';
import useAuth from '../../../../Components/hooks/useAuth';


const TopBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className='top-bar d-flex justify-content-between'>
                <div className='logo' width="50%" >
                    {/* <Link to='/'></Link> */}
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className='cart' width="50%" >
                    <div style={{textAlign: 'center'}}>
                    <img src={cart} alt="" width="28px"/>
                    </div>
                   
                    <div style={{textAlign: 'center'}}>
                        <Link to='/dashboard'><img src={signIn} alt="" width="30px"/></Link>
                    </div>
                    {
                        user?.email?
                        <Button onClick={logOut} variant="contained">LOGOUT</Button>
                        :
                        <div style={{textAlign: 'center'}}>
                        <NavLink to='/login'><Button variant="contained">LOGIN</Button></NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default TopBar;