import { MenuIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/outline";

function ButtonCart({ settingItems, onClickFunction }) {
    return (
        <button className="h-4 w-4 text-gray-400" onClick={onClickFunction}>
            {settingItems}
        </button>);
};

function Button(props) {
    return (
        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={props.onClickFunction}> {props.action} </button>
    )
}

function ButtonAddtoCart(props) {
    return (
        <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={props.onClickFunction}>
            <ShoppingCartIcon className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor" />
            <span className="mx-1">{props.action}</span>
        </button>
    )
}

function ButtonHamburguer() {
    return (
        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
            <MenuIcon className="w-6 h-6 fill-current" />
        </button>
    )

}

function ButtonAddtoOrder(props) {
    return (
        <button href="#" className="mt-6 block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400" onClick={props.onClickFunction}>{props.name}</button>
    )
}

function BacktoHomeButton(props) {
    return (
        <button className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
            {props.message}
        </button>
    )
}

function RemoveCartButton({ action }) {
    return (
        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
            <TrashIcon viewBox="0 0 22 22" className="w-4 h-4 fillCurrent" />
            <span>{action}</span>
        </button>
    )

}

function ButtonCheckout({ message, action }) {

    return (
        <button
            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            onClick={action}
            >
            {message}
        </button>
    )
}

export { ButtonCart, Button, ButtonAddtoCart, ButtonHamburguer, ButtonAddtoOrder, BacktoHomeButton, RemoveCartButton, ButtonCheckout }