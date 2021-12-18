import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import lottie from "lottie-web";
import './NotFound.css'
import { Button, SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';


const NotFound = () => {
    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        )
    
    }
    const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../image/notFound.json')
        })
        
    }, [])
    return (
        <div>
            <div className="not-found" ref={container}></div>
            <Link to="/"><Button variant="contained" endIcon={<HomeIcon />}>SEND ME TO HOME</Button></Link>
        </div>
    );
};

export default NotFound;