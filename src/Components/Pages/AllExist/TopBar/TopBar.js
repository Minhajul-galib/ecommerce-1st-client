import React from 'react';
import logo from '../../../../image/logo.png'
import cart from '../../../../image/cart.png'
import signIn from '../../../../image/signIn.png'
import './TopBar.css'
import { Link } from '@mui/material';

const TopBar = () => {
    return (
        <div>
            <div className='top-bar d-flex justify-content-between'>
                <div className='logo' width="50%" >
                    <Link to='/home'><img src={logo} alt="" /></Link>
                </div>
                <div className='cart' width="50%" >
                    <div style={{textAlign: 'center'}}>
                    <img src={cart} alt="" width="28px"/>
                    <br /><p>Cart</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                    <img src={signIn} alt="" width="30px"/>
                    <br /><p>SignIn</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;