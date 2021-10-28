import {CategoryList} from "./Categories/CategoryList"
import {Products} from "./Products"
import { useState, useEffect } from "react";
import {storeItem} from "../Utils/FetchingStoreItems"

function ItemList() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        storeItem({setProduct});
    }, []);

    return (
        
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
                <CategoryList product={product}/>

                <Products product={product} />
            </div>
        </div>
    </section>
    );
}

export {ItemList}