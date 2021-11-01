import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function CartWidget(){
    return (
        <div className="flex justify-center md:block py-3">
            <Link to="/cart">
            <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" >
                <ShoppingCartIcon className="w-5 h-5" viewBox="0 0 24 24" fill="none"/>

                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
            </a>
            </Link>
        </div>
    );
}

export {CartWidget}