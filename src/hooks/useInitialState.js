import { useState } from "react";

const initialState = {
    cart: [1],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState ({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const plusItem = (stock) => {
        const quantity = { ...state.cart };
        if (quantity < stock)
            setState({
                ...state,
                cart: [quantity, quantity++]
            });
        else { console.log('Gracias por tu preferencia, incrementaremos stock lo antes posible'); };
    }

    const minusItem = (stock) => {
        const quantity = { ...state.cart };
        if (quantity > 0)
            setState({
                ...state,
                cart: [quantity, quantity--]
            });
        else { console.log('Anìmate, sòlo se vive una vez'); }
    };

    return{
        state,
        addToCart,
        plusItem,
        minusItem
    }
}

export default useInitialState;