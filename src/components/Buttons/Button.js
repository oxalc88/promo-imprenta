import { MenuIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/outline";
function ButtonCart ({ settingItems, onClickFunction }){
    return( 
        <button className="h-4 w-4 text-gray-400" onClick={onClickFunction}>
        {settingItems} 
        </button>);
};

function Button (props) {
    return(
        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={props.onClickFunction}> {props.action} </button>
    )
}

function ButtonAddtoCart (props) {
    return(
        <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={props.onClickFunction}>
            <ShoppingCartIcon className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor"/> 
            <span class="mx-1">{props.action}</span>
        </button>
    )
}

function ButtonHamburguer(props) {
    return(
        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
            <MenuIcon className="w-6 h-6 fill-current"/>
        </button>
    )
    
}

export {ButtonCart, Button, ButtonAddtoCart, ButtonHamburguer}