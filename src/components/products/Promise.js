import { useState, useEffect } from "react";
import { Item } from "./StoreItems/Item";

const Promises = () => {
    const [product, setProduct] = useState([]);
    const storeItem = () => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                setProduct(json);
            })
            .catch(err => {console.error(err);});
    }

    useEffect(() => {
        storeItem();
    }, []);

    return(   
        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            {product.map((item) => 
            <Item key={item.id} image={item.image} price={item.price} title={item.title} description={item.description} image={item.image} />)}
        </div>);
        // <div> 
        //     <p>product</p> 
        // </div>);
};

export {Promises}