import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonAddtoCart } from "../../Buttons/Button";
import { ItemCount } from "./ItemCount"


function Item({ image, title, price, id }) {
    const [cart, setCart] = useState(1);

    // function onAdd() {
    //     alert(`Las ${cart} ${title} han sido agregadas a su compra`)
    // }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img className="object-cover w-full rounded-md h-72 xl:h-80" src={`${image}`} alt={`"${title}"`} />
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{title}</h4>
            <ItemCount stock='10' cart={cart} setCart={setCart} />
            <p className="text-blue-500">{price}</p>
            <Link to={`/item/:${id}`} >
                <ButtonAddtoCart action='Comprar' />
            </Link>
        </div>
    )
}

export { Item }