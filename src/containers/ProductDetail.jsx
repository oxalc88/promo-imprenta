import React, { useContext } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { ButtonAddtoOrder } from '../components/Buttons/Button';
import { ItemCount } from '../components/products/StoreItems/ItemCount';
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';

const ProductDetail = () => {
    const { id } = useParams();
    const newId = id.slice(1)
    const API = `https://fakestoreapi.com/products/${newId}`
    const products = useGetProducts(API);
    const {state, addToCart} = useContext(AppContext);
    
    const quantity = state.cart
    const setQuantity = setState.cart

    const stock = 10;


    return (
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                <div className="max-w-lg lg:mx-12 lg:order-2 lg:space-y-6">
                    <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{products.title}</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{products.description}</p>
                    <div className=" flex place-items-center">
                        <span className="pt-2 text-4xl font-bold text-gray-800 dark:text-gray-100">{products.price}</span>
                        <ItemCount stock={stock} cart={quantity} setCart={setQuantity} />
                        <Link to="/cart" >
                        <ButtonAddtoOrder name={'Añadir al carrito'} />
                        </Link>
                    </div>
                    <div>
                        Disponibles {stock - cart} unidades.
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-scale-down w-full h-full max-w-2xl rounded-md" src={`${products.image}`} alt={`"${products.title}"`} />
            </div>
        </div>
    );
}

export default ProductDetail
