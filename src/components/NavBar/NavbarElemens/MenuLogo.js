import { ButtonHamburguer } from "../../Buttons/Button";
import { Link } from "react-router-dom";

function MenuLogo ({logo}) {
    return (
        <div className="flex items-center justify-between">
            {/* Logo Barra Menu*/}
            <div>
                <Link to={"/"}>
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                {logo}</a>
                </Link>
            </div>
            
            {/* Menu Hamburguesa */}
            <div className="flex md:hidden">
                <ButtonHamburguer />
            </div>
        </div>
    );
}

export {MenuLogo}