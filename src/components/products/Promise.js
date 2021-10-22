import { products } from "./Products";
import { Item } from "./StoreItems/Item";
const Promises = ([{products}]) => {
    const productsResponse = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(products);
        }, 3000);            
    });

    productsResponse.then((result) => {
        JSON.stringify(result);
        console.log(`Result: ${result}`);
        }) 

    return(   
        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            {products.map((products) => <Item key={products.id} image={products.image} price={products.price} title={products.title} description={products.description} image={products.image} />)}
        </div>);
};

export {Promises}