import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore } from "../../../firebase";

function Menu() {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('products')

        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
                console.log('No Items');
                return
            }
            setProducts(querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            })))
        })
    }, [])

    const filteredProducts = [];
    products.map((product) => {
        if (filteredProducts.indexOf(product.category) === -1) {
            filteredProducts.push(product.category)
        }
    });

    return (
        <div className="flex flex-col md:flex-row md:mx-6 py-2">
            {filteredProducts.map((value, index) => (
                <Link to={`/category/:${value}`} key={`category-id${index}`}>
                    <div key={index} className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                        {value}</div>
                </Link>))}
        </div>
    );
}

export { Menu }