import { Link } from "react-router-dom";
import { Item } from "../products/StoreItems/Item";

const Products = ({product}) => {
    return(   
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {product.map((item) => 
            <Item key={item.id} image={item.image} price={item.price} title={item.title} description={item.description} image={item.image} />
            )}
            
        </div>);
};

export {Products}