import { CardItem } from "./products/CardItem";

function ItemListContainer(props) {
    return (
        <main className="container px-6">
            <h1>
                Bienvenido {props.visita} a nuestra tienda.
            </h1>
            <CardItem />
        </main>
    );
}

export {ItemListContainer}