import { ButtonHamburguer } from "../../Buttons/Button";

function MenuLogo ({logo}) {
    return (
        <div className="flex items-center justify-between">
            {/* Logo Barra Menu*/}
            <div>
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">
                {logo}</a>
            </div>
            
            {/* Menu Hamburguesa */}
            <div className="flex md:hidden">
                <ButtonHamburguer />
            </div>
        </div>
    );
}

export {MenuLogo}