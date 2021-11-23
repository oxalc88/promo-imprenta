import { useState } from "react";

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.product.id !== payload.id)
        });
        console.log(payload.id);

    ;

};

const clearCart = () => setState(initialState)

const isInCart = (itemId) => {
    //true
    //false 
}

return {
    state,
    addToCart,
    removeCart,
    clearCart,
    isInCart
}
}

export default useInitialState;