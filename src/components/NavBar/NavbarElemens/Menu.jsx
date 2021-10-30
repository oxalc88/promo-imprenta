function Menu () {
    const menuItems = ['Inicio', 'Tienda', 'Contacto', 'Nosotros']
    
    return (
        <div className="flex flex-col md:flex-row md:mx-6">
            {menuItems.map((value, index) =>(
                <a key={index} className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">
            {value}</a>))}
        </div>
    );
}

export {Menu}