const FetchingstoreItem = async (props) => {

    const urlApi = "https://fakestoreapi.com/products/"
    const singleProduct = 2

    // fetch(`${urlApi}`)
    //     .then(res => res.json())
    //     .then((res) => {
    //         console.log(res);
    //         setProduct(res);
    //     })
    //     .catch(err => { console.error(err); });

    const [ProductResponse, singleProductResponse] = await Promise.all([
        fetch(`${urlApi}`),
        fetch(`${urlApi}${singleProduct}`)
    ])
    props.setProduct = await ProductResponse.json();
    props.setItem = await singleProductResponse.json();

}

export { FetchingstoreItem }