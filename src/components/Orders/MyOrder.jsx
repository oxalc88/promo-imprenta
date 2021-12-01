import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import { RemoveCartButton } from '../Buttons/Button'
import { Link } from 'react-router-dom';



const MyOrder = ({ product, quantity }) => {

    const { removeCart } = useContext(AppContext);

    const handleRemove = product => {
        removeCart(product)
    }

    return (
        <li key={product.id} className="py-6 flex">
            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                    src={`${product.image}`}
                    alt={`"${product.title}"`}
                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div className="ml-4 flex-1 flex flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <Link to={`/item/:${product.id}`} >
                            <h3>{product.title}</h3>
                        </Link>
                        <p className="ml-4">{product.price.toFixed(2)}</p>
                    </div>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    <p>Cantidad: {quantity} </p>

                    <div className="flex" onClick={() => handleRemove(product)} >
                        <RemoveCartButton action="Quitar" />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MyOrder