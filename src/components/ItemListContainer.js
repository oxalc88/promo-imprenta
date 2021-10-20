import { Item } from "./products/StoreItems/Item";

function ItemListContainer(props) {
    return (
        <main className="container px-6">
            <h1>
                Bienvenido {props.visita} a nuestra tienda.
            </h1>
            <Item />
        </main>
    );
}

export {ItemListContainer}