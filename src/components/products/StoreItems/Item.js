import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import AppContext from "../../../context/AppContext";
import { ButtonAddtoCart } from "../../Buttons/Button";



function Item({ product }) {

    const { addToCart } = useContext(AppContext);
    const handleClick = item => {
        addToCart(item)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <Link to={`/item/:${product.id}`} >
                <img className="object-scale-down w-full rounded-md h-72 xl:h-80" src={`${product.image}`} alt={`"${product.title}"`} />
            </Link>
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{product.title}</h4>

            <p className="text-blue-500">{product.price}</p>
            <ButtonAddtoCart action='Añadir al Carrito' onClickFunction={handleClick} />
        </div>
    )
}

export { Item }