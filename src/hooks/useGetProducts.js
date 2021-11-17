import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchingProduct = async () => {
            const response = await axios(API);
            setProducts(response.data)
        }
        fetchingProduct();
        console.log(API);
    }, []);

    return products;
}

// const useGetProducts = ({ loading, case}) => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const db = getFirestore();
//         const itemCollection = db.collection('products')

//         itemCollection.get().then(querySnapshot => {
//             if (querySnapshot.size === 0) {
//                 console.log('No Items');
//                 return
//             }
//             setProducts(querySnapshot.docs.map(document => ({
//                 id: document.id,
//                 ...document.data()
//             })))
//         }).catch(error => console.log(error)).finally(() => setLoading(false))
//     }, [])

//     return products;
// }

// const useGetProducts = (action) => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [productsByCategory, setProductsByCategory] = useState([])
//     const db = getFirestore();
//     const itemCollection = db.collection('products')

//     switch (action) {
        
//         case (action = 'product'):
//             useEffect(() => {
//                 itemCollection.get().then(querySnapshot => {
//                     if (querySnapshot.size === 0) {
//                         console.log('No Items');
//                         return
//                     }
//                     setProducts(querySnapshot.docs.map(document => ({
//                         id: document.id,
//                         ...document.data()
//                     })))
//                 }).catch(error => console.log(error)).finally(() => setLoading(false))
//             }, [])
//             return products;

//         case (action = 'categoryId'):
//             useEffect(() => {
//                 const productsByCategory = itemCollection.where("category", "==", categoyId)

//                 productsByCategory.get().then(querySnapshot => {
//                     if (querySnapshot.size === 0) {
//                         console.log('No Items');
//                         return
//                     }
//                     setProducts(querySnapshot.docs.map(document => ({
//                         id: document.id,
//                         ...document.data()
//                     })))
//                 }).catch(error => console.log(error)).finally(() => setLoading(false))
//             }, [categoyId])
//             return productsByCategory;

//         default: loading
//             break;
//     }

// }




export default useGetProducts;
