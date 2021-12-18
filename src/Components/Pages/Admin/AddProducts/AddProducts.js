import { TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './AddProducts.css'

const AddProducts = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [availability, setAvailability] = useState('');
    const [productCode, setProductCode] = useState('');
    const [brand, setBrand] = useState('');
    const [reviews, setReviews] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');

    const handleTitle = ({ target }) =>{
        setTitle(target.value);
    };
    
    const handleCategory = ({ target }) =>{
        setCategory(target.value);
    };

    const handleAvailability = ({ target }) =>{
        setAvailability(target.value);
    };
    
    const handleProductCode = ({ target }) =>{
        setProductCode(target.value);
    };
    
    const handleBrand = ({ target }) =>{
        setBrand(target.value);
    };
    
    const handleReviews = ({ target }) =>{
        setReviews(target.value);
    };
    
    const handlePrice = ({ target }) =>{
        setPrice(target.value);
    };
    
    const handleDescription = ({ target }) =>{
        setDescription(target.value);
    };
    
    const handleImage = ({ target }) =>{
        setImage(target.value);
    };
    
    const handleStatus = ({ target }) =>{
        setStatus(target.value);
    };

    const handleProductAdd = e =>{
        const productData = {title, category, availability, productCode, brand, reviews, price, description, image, status};
        console.log(productData);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)

        })
        .then(res => res.json())
        .then(data=>{
            if(data.insertId){
                e.target.reset();
                e.preventDefault();
            }
            alert('Adding your products')
            e.preventDefault();
            e.target.reset();
            
        })
        
    }

    return (
        <div>
            <div className='AddProducts'>
                <div className='main-from'>
                    <h5 style={{textAlign: 'center', paddingTop: '3%'}}>Add Products</h5>
                    <form onSubmit={handleProductAdd} >
                        
                        <div className="d-flex gap-5 justify-content-between mb-3">
                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        label="Products Title"
                        style={{width:'100%'}}
                        onChange={handleTitle}
                        value={title} 
                        variant="filled" 
                        required
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        label="Product category"
                        style={{width:'100%'}}
                        onChange={handleCategory}
                        value={category} 
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
                        type="number" 
                        label="Product availability"
                        onChange={handleAvailability}
                        value={availability} 
                        variant="filled" 
                        required
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        style={{width:'100%'}}
                        label="Product code"
                        onChange={handleProductCode}
                        value={productCode} 
                        variant="filled" 
                        required
                        />
                        </div>
                        </div>
                        
                        <div className="d-flex gap-5 mb-3">
                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        style={{width:'100%'}}
                        label="Product Brand"
                        onChange={handleBrand}
                        value={brand} 
                        variant="filled" 
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="number" 
                        label="Product Reviews"
                        style={{width:'100%'}}
                        onChange={handleReviews}
                        value={reviews} 
                        variant="filled" 
                        required
                        />
                        </div>
                        </div>

                        <div className="d-flex gap-5 mb-3">
                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="number" 
                        label="Product Price"
                        onChange={handlePrice}
                        style={{width:'100%'}}
                        value={price} 
                        variant="filled" 
                        required
                        />
                        </div>

                        <div style={{width:'100%'}}>
                        <TextField 
                        id="filled-basic"
                        type="text" 
                        label="Products Status"
                        style={{width:'100%'}}
                        onChange={handleStatus}
                        value={status} 
                        variant="filled" 
                        />
                        </div>
                        </div>

                        <div style={{width:'100%'}} className='mb-3'>
                        <TextareaAutosize
                        id="filled-basic"
                        type="text" 
                        label="Products Description"
                        onChange={handleDescription}
                        value={description} 
                        aria-label="minimum height"
                        minRows={3}
                        style={{width:'100%'}}
                        required
                        />
                        </div>

                        <div style={{width:'100%'}} className='mb-3'>
                        <TextField 
                        style={{width:'100%'}}
                        id="filled-basic"
                        type="text" 
                        label="Image Link"
                        onChange={handleImage}
                        value={image} 
                        variant="filled" 
                        required
                        />
                        </div>
                        

                        <Button id='product-btn' type='submit' variant="contained" endIcon={<AddCircleIcon />}>
                        Add Products
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;