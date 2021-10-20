import { useEffect } from "react";
import { Item } from "./products/Item";

useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
})



function ItemListContainer(props) {
    return (
        
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
                <CategoryList />

                <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <Item />
                </div>
            </div>
        </div>
    </section>
    );
}

export {ItemListContainer}