import { SearchIcon } from "@heroicons/react/outline";

function Search () {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none"/>
            </span>

            <input type="text" className="w-full mx-2 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Busca lo que necesitas"/>
        </div>
    );
}

export {Search}