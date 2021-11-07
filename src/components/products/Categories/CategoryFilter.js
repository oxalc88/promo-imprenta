import { Link } from "react-router-dom";

const CategoryFilter = ({ product }) => {

    const filteredProducts = [];
    product.map((product) => {
        if (filteredProducts.indexOf(product.category) === -1) {
            filteredProducts.push(product.category)
        }
    });
    return (
        <>
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            {filteredProducts.map((item) =>
            (
                <Link to={`/category/:${item}`}>
                <div key={`category-id-${item.id}`} className="block font-medium text-gray-500 dark:text-gray-300 hover:underline uppercase px-10">
                {item}</div>
                </Link>))}
        </div>
        </>
    )

}

export { CategoryFilter }