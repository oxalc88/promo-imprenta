import { useState } from "react";

const initialState = {
    cart: [],
    item: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState ({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    // const addItem

    

    return{
        state,
        addToCart
    }
}

export default useInitialState;