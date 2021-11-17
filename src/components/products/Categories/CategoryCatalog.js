import React, {useState, useEffect} from 'react'
import { Item } from '../StoreItems/Item'
import { useParams } from 'react-router';
import { getFirestore } from '../../../firebase';

const CategoryCatalog = () => {
    const { categoryId } = useParams();
    const newCategory = categoryId.slice(1)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);   


    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('products')

        if (!newCategory) {
            itemCollection.get()
                .then(querySnapshot => {
                    if (querySnapshot.size === 0) {
                        console.log('No Items');
                        return
                    }
                    setProducts(querySnapshot.docs.map(document => ({
                        id: document.id,
                        ...document.data()
                    })))
                }).catch(error => console.log(error)).finally(() => setLoading(false))
                return
        }
        const productsByCategory = itemCollection.where("category", "==", newCategory)

        productsByCategory.get()
                .then(querySnapshot => {
                    if (querySnapshot.size === 0) {
                        console.log('No Items');
                        return
                    }
                    setProducts(querySnapshot.docs.map(document => ({
                        id: document.id,
                        ...document.data()
                    })))
                }).catch(error => console.log(error)).finally(() => setLoading(false))
    },[newCategory]);



    return (
        <>
        {loading ? (
                <h1>Loading ...</h1>
            ) :
            
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">            
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
        
        </div>}
        </>
    )
}

export default CategoryCatalog
