import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import { ButtonAddtoCart } from "../../Buttons/Button";
import { ItemCount } from "./ItemCount";


function Item({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(AppContext);

    const handleClick = () => {
        const item = { product, quantity }
        addToCart(item);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <Link to={`/item/:${product.id}`} >
                <img className="object-scale-down w-full rounded-md h-72 xl:h-80" src={`${product.image}`} alt={`"${product.title}"`} />
            </Link>
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{product.title}</h4>

            <p className="text-blue-500">{product.price}</p>
            <ItemCount stock={product.stock} quantity={quantity} setQuantity={setQuantity} />
            <ButtonAddtoCart action='Añadir al Carrito' onClickFunction={handleClick} />
        </div>
    )
}

export { Item }