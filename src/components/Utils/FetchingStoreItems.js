export const storeItem = ({setProduct}) => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                setProduct(json);
            })
            .catch(err => {console.error(err);});
}