import { useState, useEffect } from "react";
import { FetchingstoreItem } from "../Utils/FetchingStoreItems"
import { CategoryList } from "../components/products/Categories/CategoryList";
import { ProductsList } from "../components/products/StoreItems/ProductsList";

function ItemListContainer() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        FetchingstoreItem({ setProduct });
    }, []);

    return (
        <>
            <main className="container px-6">
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-8 mx-auto">
                        <div className="lg:flex lg:-mx-2">
                            <CategoryList product={product} />

                            <ProductsList product={product} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export { ItemListContainer }