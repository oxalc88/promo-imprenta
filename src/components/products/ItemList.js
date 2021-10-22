import {CategoryList} from "./Categories/CategoryList"
import {products} from "./Products"
import { Promises } from "./Promise";


function ItemList() {
    
    return (
        
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
                <CategoryList category={products.category}/>

                <Promises products={products} />
            </div>
        </div>
    </section>
    );
}

export {ItemList}