import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://frozen-oasis-37685.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, []);
    return [products, setProducts]
}

export default useProducts;

// jamal@gmail.com
// 1234567