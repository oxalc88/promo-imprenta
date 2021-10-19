function ButtonCart ({ settingItems, onClickFunction }){
    return( 
        <button className="h-4 w-4 text-gray-400" onClick={onClickFunction}>
        {settingItems} 
        </button>);
};

function Button (props) {
    return(
        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={props.onAdd}> {props.action} </button>
    )
}

export {ButtonCart, Button}