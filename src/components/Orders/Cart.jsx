import { Link } from 'react-router-dom'
import { ButtonCheckout } from '../Buttons/Button';
import MyOrder from './MyOrder';


export const Cart = ({cart, orderID, handleFinishPurcharse, totalCart}) => {
    return (
        <div className="flex flex-col bg-white m-4 p-4">
            <div className="flex-1 py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Carrito de Compras</h2>
                </div>

                <div className="mt-8">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cart.map(({ product, quantity }) => (
                                <MyOrder key={`cartItem-${product.id}`} product={product} quantity={quantity} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>S/ {totalCart()} soles</p>

                </div>
                <div className="mt-6">

                    <ButtonCheckout message={'Comprar'} action={handleFinishPurcharse} type="submit" />
                    {orderID && <h3>Tu orden con el id: {orderID} ha sido creado</h3>}

                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                        o{' '}
                        <Link to="/">
                            <button
                                type="button"
                                className="text-blue-600 font-medium hover:text-blue-500"
                            >
                                Agregar más productos<span aria-hidden="true"> &rarr;</span>
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}