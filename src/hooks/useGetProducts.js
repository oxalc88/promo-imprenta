import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchingProduct = async () => {
            const response = await axios(API);
            setProducts(response.data)
        }
        fetchingProduct();
        console.log(API);
    }, []);

    return products;
}

export default useGetProducts;
