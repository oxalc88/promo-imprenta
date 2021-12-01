import { Shipping } from '../components/Orders/Shipping.jsx'
import { Cart } from '../components/Orders/Cart.jsx'
import { useContext, useState } from 'react'
import AppContext from '../context/AppContext.js';
import { getFirestore } from '../firebase/index.js';
import firebase from '@firebase/app-compat';

const Checkout = () => {

    const { state: { cart } } = useContext(AppContext)
    const totalCart = () => {
        const reducer = (accumulator, { product, quantity }) => accumulator + product.price * quantity;

        const orderCart = cart.reduce(reducer, 0);
        return orderCart.toFixed(2);

    }

    const [orderData, setOrderData] = useState([])

    const onSubmit = async (data, e) => {
        console.log(data);
        setOrderData([
            ...orderData,
            data
        ])

        e.target.reset();
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
                firstname: orderData.firstname,
                lastname: orderData.lastname,
                email: orderData.email,
                phone: orderData.phone,
                address: orderData.address,
                distrito: orderData.distrito,
                post_code: orderData.postcode,
                provincia: orderData.provincia,
                referencia: orderData.reference,
                region: orderData.region
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
        <div className="container m-1 w-screen mx-auto">
            <div className="flex flex-col bg-white shadow-xl grid lg:grid-cols-2 gap-1 md:grid-cols-1">
                <Cart cart={cart} orderID={orderID} handleFinishPurcharse={handleFinishPurcharse} totalCart={totalCart} />
                <Shipping onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Checkout


