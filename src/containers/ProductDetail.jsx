import React, { useContext } from 'react'
import { useParams } from "react-router";
import { ButtonAddtoOrder } from '../components/Buttons/Button';
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';

const ProductDetail = () => {
    const { id } = useParams();
    const newId = id.slice(1)
    const API = `https://fakestoreapi.com/products/${newId}`
    const product = useGetProducts(API);
    const { addToCart} = useContext(AppContext);
    
    const handleClick = () => {
        const item = {product} 
        addToCart(item);
    }
    


    return (
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                <div className="max-w-lg lg:mx-12 lg:order-2 lg:space-y-6">
                    <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{product.title}</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{product.description}</p>
                    <div className="flex flex-col items-between ">
                        <span className="pt-2 text-4xl font-bold text-gray-800 dark:text-gray-100">{product.price}</span>
                        <ButtonAddtoOrder name={'Añadir al carrito'} onClickFunction={handleClick}/>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-scale-down w-full h-full max-w-2xl rounded-md" src={`${product.image}`} alt={`"${product.title}"`} />
            </div>
        </div>
    );
}

export default ProductDetail
