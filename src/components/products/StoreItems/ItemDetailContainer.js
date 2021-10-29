import { useParams } from "react-router";
import {useEffect, useState } from "react"

function ItemDetailContainer({product}) {
    const [item, setItem] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const findItem = product.filter(item => item.id === id)
        setItem(...findItem)
    }, [id])
        
    
    
     return (   
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                <div className="max-w-lg lg:mx-12 lg:order-2">
                    <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{item.title}</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
                    <div className="flex-shrink-0">
                        <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">{item.price}</span>
                    </div>
                    <div className="mt-6">
                        <a href="#" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">Comprar</a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src={`${item.image}`} alt="apple watch photo" />
            </div>
        </div>
     );
}

export {ItemDetailContainer}