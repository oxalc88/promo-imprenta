import React from 'react'
import { ItemCount } from '../products/StoreItems/ItemCount'
import { RemoveCartButton } from '../Buttons/Button'
import { useState } from 'react/cjs/react.development';




function MyOrder({ product }) {
    const [quantity, setQuantity] = useState(1);
    const stock = 10;

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
                        <h3>
                            <a href="#">{product.title}</a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                    </div>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    <ItemCount stock={stock} quantity={quantity} setQuantity={setQuantity} />

                    <div className="flex">
                        <RemoveCartButton action="Quitar" />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MyOrder