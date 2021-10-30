const CategoryList = ({product}) => {
    const filteredProducts = [];
    product.map(item => {
    if (filteredProducts.indexOf(item.category) === -1) {
        filteredProducts.push(item.category)
    }
}); 
    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            {filteredProducts.map((item) => 
            (<a key={item.id} href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
                {item}</a>))}
        </div>
    )
    
}

export {CategoryList}