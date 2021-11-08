import React from 'react'
import { Link } from 'react-router-dom'
import { BacktoHomeButton, RemoveCartButton } from '../components/Buttons/Button'
import { TrashIcon } from '@heroicons/react/outline'
import { ItemCount } from '../components/products/StoreItems/ItemCount'

function Cart() {
    return (
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                <div className="max-w-lg lg:mx-12 lg:order-2 lg:space-y-6">
                    <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">BIENVENIDOS</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Estamos trabajando, pronto podrás compar con nosotros</p>
                    <Link to={"/"}>
                        <BacktoHomeButton message={"Pero, regresa, para llenar el vacío ..."} />
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-scale-down w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1483487241135-973e8837af02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Ya volvemos" />
            </div>
        </div>
    )
}

export default Cart
