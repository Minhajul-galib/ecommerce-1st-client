import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPurchase.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Footer from '../AllExist/Footer/Footer';
import Header from '../AllExist/Header/Header';
import TopBar from '../AllExist/TopBar/TopBar';
import brand1 from '../../../image/brand (1).png'
import brand2 from '../../../image/brand (2).png'
import brand3 from '../../../image/brand (3).png'
import brand4 from '../../../image/brand (4).png'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const ProductPurchase = () => {
    const { id } = useParams();
    const [single, setSingle] = useState({});
    const [rate, setRate] = useState(5);

    // const {title, category, availability, productCode, brand, reviews, price, description, image, status, _id} = props.product;

    useEffect(()=>{
        const url = `https://frozen-oasis-37685.herokuapp.com/products/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data=>{
            setSingle(data)
            setRate(data.reviews)
        })
    }, [id]);

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address1st, setAddress1st] = ('');
    const [address2nd, setAddress2nd] = ('');


    const handleFname = ({target}) =>{
        setFname(target.value);
    }
    const handleLname = ({target}) =>{
        setLname(target.value);
    }
    const handleEmail = ({target}) =>{
        setEmail(target.value);
    }
    const handlePhone = ({target}) =>{
        setPhone(target.value);
    }
    const handle1stAddress = ({target}) =>{
        setAddress1st(target.value);
    }
    const handle2ndAddress = ({target}) =>{
        setAddress2nd(target.value);
    }

    const productTitle = single.title;
    const productCode = single.productCode;
    const productCategory = single.category;
    const productAvailability = single.availability;
    const productPrice = single.price;

    const handlePurchase = e =>{
        const clientDetails = {fname, lname, email, phone, address1st, address2nd, productTitle, productCode, productCategory, productAvailability, productPrice}
        console.log(clientDetails);

        fetch('https://frozen-oasis-37685.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(clientDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertId){
                alert('we are takeing your order')
                e.target.reset();
                e.preventDefault();

            }
            alert('we are takeing your order')
            e.preventDefault();
            e.target.reset();
            
        })
    }

    return (
        <div style={{backgroundColor: '#EDEDED'}}>
            <TopBar></TopBar>
            <Header></Header>
            <div className='product-purchase'>
                <div className='title-Show'>
                    <h3>{single.title}</h3>
                </div>
                <div className='product-purchase-pre d-flex justify-content-between'>
                    <div className='w-50 pt-5 pb-5'>
                        <img src={single?.image} alt="" width='75%' />
                    </div>

                    <div style={{textAlign:'start',paddingRight: '3%'}} className='w-50 pt-5 pb-5'>
                        <div className='d-flex justify-content-between w-75'>
                        <h3>{single?.title}</h3>
                        <h4><span>Price: </span>{single?.price}</h4>
                        </div>
                        <b><ArrowCircleRightIcon /> CATEGORY: {single?.category}</b><br />
                        <b><ArrowCircleRightIcon /> AVAILABILITY: {single?.availability} In Stock</b><br />
                        <b><ArrowCircleRightIcon /> PRODUCT CODE: {single?.productCode}</b><br />
                        <b><ArrowCircleRightIcon /> Brand: {single?.brand}</b>
                        <br />
                        <br />
                        <br />
                        <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
                        </Stack>
                        <p><span className='product-description'>Description:</span></p><hr />
                        <p>{single?.description}</p>
                        <div className='product-brand'>
                            <img src={brand1} alt="" />
                            <img src={brand2} alt="" />
                            <img src={brand3} alt="" />
                            <img src={brand4} alt="" />
                        </div>
                    </div>
                </div>

                <div className='product-purchase-form'>

                <div className='main-from'>
                    <h5 style={{textAlign: 'center', paddingTop: '3%'}}>Add Your Details</h5>
                    <form onSubmit={handlePurchase}>
                        
                        <div className="d-flex gap-5 justify-content-between mb-3">
                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        label="First Name"
                        style={{width:'100%'}}
                        onChange={handleFname}
                        value={fname} 
                        variant="filled" 
                        required
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        label="Last Name"
                        style={{width:'100%'}}
                        onChange={handleLname}
                        value={lname} 
                        variant="filled" 
                        required
                        />
                        </div>
                        </div>

                        <div className="d-flex gap-5 mb-3">
                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        style={{width:'100%'}}
                        type="email" 
                        label="Your Email"
                        onChange={handleEmail}
                        value={email} 
                        variant="filled" 
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="number" 
                        style={{width:'100%'}}
                        label="Your Phone Number"
                        onChange={handlePhone}
                        value={phone} 
                        variant="filled" 
                        />
                        </div>
                        </div>
                        
                        <div className="d-flex gap-5 mb-3">
                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        style={{width:'100%'}}
                        label="1st Address"
                        onChange={handle1stAddress}
                        value={address1st} 
                        variant="filled" 
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        label="2nd Address"
                        style={{width:'100%'}}
                        onChange={handle2ndAddress}
                        value={address2nd} 
                        variant="filled" 
                        />
                        </div>
                        </div>
                        

                        <Button id='product-btn' type='submit' variant="contained" endIcon={<AddCircleIcon />}>
                        Add Products
                        </Button>

                    </form>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPurchase;