import React, { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router";
import { ButtonAddtoOrder } from '../components/Buttons/Button';
import AppContext from '../context/AppContext';
import { getFirestore } from '../firebase';

const ProductDetail = () => {
    const { id } = useParams();
    const newId = id.slice(1)
    const { addToCart } = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        const item = { products }
        addToCart(item);
    }

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('products')
        const currentItem = itemCollection.doc(newId)
        console.log('currentItem', currentItem);

        currentItem.get()
            .then(document => {
                if (!document.exists) {
                    console.log('No Items');
                    return
                }
                setProducts({
                    id: document,
                    ...document.data()
                })
            }).catch(error => console.log(error)).finally(() => setLoading(false))
        }, [newId]);
        



        return (
            <>
                {loading ? (
                    <h1>Loading ...</h1>
                ) :
                    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                            <div className="max-w-lg lg:mx-12 lg:order-2 lg:space-y-6">
                                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{products.title}</h1>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">{products.description}</p>
                                <div className="flex flex-col items-between ">
                                    <span className="pt-2 text-4xl font-bold text-gray-800 dark:text-gray-100">{products.price}</span>
                                    <ButtonAddtoOrder name={'Añadir al carrito'} onClickFunction={handleClick} />
                                </div>

                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-scale-down w-full h-full max-w-2xl rounded-md" src={`${products.image}`} alt={`"${products.title}"`} />
                        </div>
                    </div>}
            </>
        )
    }

export default ProductDetail;
