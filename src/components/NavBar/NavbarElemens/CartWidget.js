import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext"


function CartWidget() {
    const { state: { cart } } = useContext(AppContext);
    // const [toggleOrders, setToggleOrders] = useState(false)


    return (
        <div className="flex md:block py-3">
            <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                >
                <ShoppingBagIcon className="w-10 h-10" viewBox="0 0 24 24" fill="none" />
                {cart.length > 0 ?
                    <span className="relative -top-3 left-0 px-1.5 py-0.5 text-xs text-white bg-blue-600 rounded-full ">
                        {cart.length}
                    </span> : null}
            </a>

            
        </div>
    );
}

export { CartWidget }