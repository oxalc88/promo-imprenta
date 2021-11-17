import { useState, useEffect } from 'react';
import { CategoryFilter } from "../components/products/Categories/CategoryFilter";
import { ProductsList } from "../components/products/StoreItems/ProductsList";
import { getFirestore } from "../firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
        }).catch(error => console.log(error)).finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading ? (
                <h1>Loading ...</h1>
            ) : <main className="container px-6">
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-8 mx-auto">
                        <div className="lg:flex lg:-mx-2 lg:space-x-14">
                            <CategoryFilter product={products} />

                            <ProductsList products={products} />
                        </div>
                    </div>
                </section>
            </main>}

        </>
    );
}

export { ItemListContainer }