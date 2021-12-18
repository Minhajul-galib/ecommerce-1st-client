import React from 'react';
import useProducts from '../../../hooks/useProducts';
import './HomeProducts.css'
import HomeSingleProduct from './HomeSingleProduct/HomeSingleProduct';

const HomeProducts = () => {
    const [products] = useProducts();
    const productsHome = products.slice(0, 8);
    console.log(productsHome);
    return (
        <div>
            <div className='home-products'>
                <h2>All Products</h2>
                <div className='home-all-products'>
                    {
                        productsHome.map(product => <HomeSingleProduct
                                                                        key={product._id}
                                                                        product={product}
                                                                        ></HomeSingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;