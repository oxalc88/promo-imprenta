import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline'
function ItemCount() {
    return (
        <div>
            <div className="w-1/3 mt-1 relative rounded shadow-sm ">
            <button className="absolute inset-y-0 left-1 flex items-center">
                <MinusCircleIcon className="h-4 w-4 text-gray-400"/>
            </button>
            <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm rounded-md text-center"
                value="0"
            />
            <button className="absolute inset-y-0 right-1 flex items-center">
                <PlusCircleIcon className="h-4 w-4 text-gray-400"/>
            </button>
            </div>
        </div>
    )
}

export {ItemCount}