import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline'
import {Button} from '../Buttons/Button'

function ItemCount() {
    const stock = 10;
    const [cart, setCart] = useState(0);
    
    let addToCart = () => {
        if (cart < stock) {setCart(cart + 1); console.log(cart)} else {console.log('Gracias por tu preferencia, incrementaremos stock lo antes posible')} 
    }

    let restToCart = () => {
        if (cart > 0) {setCart(cart - 1); console.log(cart)} else {console.log('Anìmate, sòlo se vive una vez')} 
    }


    return (
        <div>
            <div className="w-1/3 mt-1 relative rounded shadow-sm flex">
            <Button 
                settingItems={<MinusCircleIcon className="h-4 w-4 text-gray-400"/>} 
                onClickFunction={restToCart}
            />
            <input
                className="focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm rounded-md text-center"
                value = {cart}
            /> 
            <Button 
                settingItems={<PlusCircleIcon className="h-4 w-4 text-gray-400"/>} 
                onClickFunction={addToCart}
            />
            </div>
        </div>
    );
};

export {ItemCount}