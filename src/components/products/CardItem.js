import { Button } from "../Buttons/Button"
import { ItemCount } from "./ItemCount"


function CardItem () {
    return (
        <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover" style= {{'background-image': 'url(\'https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80\')'}}/> 

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Mochila</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
                <ItemCount stock='10' cart='1'/>                
                <div className="flex justify-between mt-3 item-center">
                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h2>
                    <Button action='Comprar' />
                </div>
            </div>
        </div>
    )
}

export {CardItem}