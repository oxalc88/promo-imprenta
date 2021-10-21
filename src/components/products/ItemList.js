import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Item } from "./products/Item";




function ItemListContainer({item}) {
    
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
                .then((res)=>{
                    return res.json();})
                // .then(json=>console.log(json))
                .then((result) =>{
                    const { results } = result;
                    setItem(results);
                })
    }, [])
    
    return (
        
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
                <CategoryList />

                <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    {ItemListContainer.map((item) => <Item key={item.id} image={item.image} price={item.price} title={item.title} description={item.description} image={item.image} />)}
                </div>
            </div>
        </div>
    </section>
    );
}

export {ItemListContainer}