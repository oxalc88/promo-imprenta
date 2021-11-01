import React from 'react'
import { Item } from '../StoreItems/Item'
import useGetProducts from '../../../hooks/useGetProducts';
import { useParams } from 'react-router';

const CategoryCatalog = () => {
    const { categoryId } = useParams();
    const newCategory = categoryId.slice(1)
    const API = `https://fakestoreapi.com/products/category/${newCategory}`
    const products = useGetProducts(API);
    
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}

        </div>
    )
}

export default CategoryCatalog
