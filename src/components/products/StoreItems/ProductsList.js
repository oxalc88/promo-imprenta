import { Item } from "./Item";

const ProductsList = ({ products }) => {
    
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}

        </div>);
};

export { ProductsList }