import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { ButtonCart } from '../../Buttons/Button';


const ItemCount = (props) => {
    const stock = props.stock;

    const addToCart = () => {
        if (props.cart < stock) { props.setCart(props.cart++); console.log(props.cart); } else { console.log('Gracias por tu preferencia, incrementaremos stock lo antes posible'); }
    }
    const restToCart = () => {
        if (props.cart > 0) { props.setCart(props.cart--); console.log(props.cart); } else { console.log('Anìmate, sòlo se vive una vez'); }
    }

    return (
        <div>
            <div className="w-1/3 mt-1 relative rounded shadow-sm flex mx-auto my-auto">
                <ButtonCart
                    settingItems={<MinusCircleIcon />}
                    onClickFunction={props.minusItem}
                />
                <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm rounded-md text-center getItem"
                    value={props.quantity}
                    onChange={props.setQuantity}
                />
                <ButtonCart
                    settingItems={<PlusCircleIcon />}
                    onClickFunction={props.plusItem}
                />
            </div>
        </div>
    );
};

export { ItemCount }