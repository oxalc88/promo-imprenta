import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { ButtonCart } from '../Buttons/Button'

function ItemCount(props) {
    const stock = props.stock;
    const [cart, setCart] = useState(1);
    
    function addToCart() {
        if (cart < stock) { setCart(cart + 1); console.log(cart); } else { console.log('Gracias por tu preferencia, incrementaremos stock lo antes posible'); }
    }

    function restToCart() {
        if (cart > 0) { setCart(cart - 1); console.log(cart); } else { console.log('Anìmate, sòlo se vive una vez'); }
    }

    function onAdd() {
        alert(`Se añadieron ${cart} al carrito`)
    }

    return (
        <div>
            <div className="w-1/3 mt-1 relative rounded shadow-sm flex">
            <ButtonCart 
                settingItems={<MinusCircleIcon />} 
                onClickFunction={restToCart}
            />
            <input
                className="focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm rounded-md text-center"
                value = {cart}
            /> 
            <ButtonCart 
                settingItems={<PlusCircleIcon />} 
                onClickFunction={addToCart}
            />
            </div>
        </div>
    );
};

export {ItemCount}