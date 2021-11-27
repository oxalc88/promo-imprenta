import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonCheckout } from '../Buttons/Button';
import MyOrder from './MyOrder';
import AppContext from '../../context/AppContext';
import { getFirestore } from '../../firebase';
import firebase from '@firebase/app-compat';

export const Cart = () => {
    const { state: { cart } } = useContext(AppContext)
    const totalCart = () => {
        const reducer = (accumulator, { product, quantity }) => accumulator + product.price * quantity;

        const orderCart = cart.reduce(reducer, 0);
        return orderCart.toFixed(2);

    }

    const [orderID, setOrderID] = useState(null);

    const handleFinishPurcharse = () => {
        const newCart = cart.map(({ product, quantity }) => ({
            product: {
                id: product.id,
                name: product.title,
                price: product.price.toFixed(2)
            },
            quantity,
        }));


        const newOrder = {
            buyer: {
                name: "Karina Sissi",
                phone: "978546312",
                email: "karina@sissi.com",
                address: "Av. Siempre Viva 363",
                region: "Lima",
                provincia: "Lima",
                distrito: "Los Olivos",
                post_code: "15301",
                referencia: "espalda Palacio Juventud"
            },
            cart: newCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: `"${totalCart}"`
        }

        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        console.log(newOrder);

        orders
            .add(newOrder)
            .then((response) => {
                cart.forEach(({ product, quantity }) => {
                    const docRef = db.collection("products").doc(product.id);
                    batch.update(docRef, { stock: product.stock - quantity });
                });
                batch.commit();
                setOrderID(response.id);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="flex flex-col bg-white m-4 p-4">
            <div className="flex-1 py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Carrito de Compras</h2>
                </div>

                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
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

                    <ButtonCheckout message={'Comprar'} action={handleFinishPurcharse} />
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