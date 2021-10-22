import {useState} from "react";
import { Button } from "../../Buttons/Button";
import { ItemCount } from "./ItemCount"


function Item ({image, title, description, price}) {
    const [cart, setCart] = useState(1);
    
    function onAdd() {
        alert(`Las ${cart} ${title} han sido agregadas a su compra`)
    }

    return (
        <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover" style= {{backgroundImage: `"url(${image})"`}}/> 

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                <ItemCount 
                stock='10' 
                cart={cart}
                setCart={setCart}
                />                
                <div className="flex justify-between mt-3 item-center">
                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h2>
                    <Button action='Comprar' onClickFunction={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export {Item}