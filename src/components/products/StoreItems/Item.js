import {useState} from "react";
import { ButtonAddtoCart } from "../../Buttons/Button";
import { ItemCount } from "./ItemCount"


function Item ({image, title, price}) {
    const [cart, setCart] = useState(1);
    
    function onAdd() {
        alert(`Las ${cart} ${title} han sido agregadas a su compra`)
    }

    return (
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img className="object-cover w-full rounded-md h-72 xl:h-80" src={`${image}`} alt={`"${title}"`}/>
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{title}</h4>
                <ItemCount stock='10' cart={cart} setCart={setCart}/>
                <p class="text-blue-500">{price}</p>

                <ButtonAddtoCart action='Comprar' onClickFunction={onAdd}/>
            </div>
    )
}

export {Item}