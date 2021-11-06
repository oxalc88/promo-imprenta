import React from 'react'

function MyOrder({ product }) {
    return (
        <div>
            <ul className="flex flex-col divide-y divide-coolGray-300">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500" src={`${product.image}`} alt={`"${product.title}"`} />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                                    <ItemCount />
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">{product.price}</p>
                                </div>
                            </div>
                            <div className="flex text-sm">
                                <RemoveCartButton action="Quitar" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MyOrder