import { Shipping } from '../components/Orders/Shipping.jsx'
import { Cart } from '../components/Orders/Cart.jsx'


function Checkout() {

    return (
        <div className="container m-1 w-screen mx-auto">
            <div className="flex flex-col bg-white shadow-xl grid lg:grid-cols-2 gap-1 md:grid-cols-1">
                <Cart />
                {/* <Shipping /> */}
            </div>
        </div>
    )
}

export default Checkout


