import { CategoryList } from "../components/products/Categories/CategoryList";
import { ProductsList } from "../components/products/StoreItems/ProductsList";
import useGetProducts from "../hooks/useGetProducts";

const API = "https://fakestoreapi.com/products"

const ItemListContainer = () => {
    const products = useGetProducts(API);
    
    return (
        <>
            <main className="container px-6">
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-8 mx-auto">
                        <div className="lg:flex lg:-mx-2 lg:space-x-14">
                            <CategoryList product={products} />

                            <ProductsList products={products} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export { ItemListContainer }