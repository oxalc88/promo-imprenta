function CategoryList(props) {

    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">{props.category}</a>
        </div>
    )
    
}

export {CategoryList}