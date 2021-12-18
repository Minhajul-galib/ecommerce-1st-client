import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeProducts.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const HomeSingleProduct = (props) => {

    const {title, category, availability, productCode, brand, reviews, price, description, image, status, _id} = props.product;


    return (
        <div className='home-single-product'>
            <div className='home-single-img'>
                <img src={image} alt="" width='100%' />
                <p>{category}</p>
            </div>
            <div className='home-single-title'>
                <p style={{color: '#a359c9',fontSize: '17px',fontWeight: '600'}}>Price: ${price}</p>
                <h5>{title}</h5>
                <Stack spacing={1} style={{marginBottom: '10px'}}>
                <Rating className="rate-star" name="half-rating" defaultValue={reviews} precision={0.5} />
                </Stack>
                <Link to={`/ProductPurchase/${_id}`} className='buy-btn'>Buy Now</Link>
            </div>
        </div>
    );
};

export default HomeSingleProduct;