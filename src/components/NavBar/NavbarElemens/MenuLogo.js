import { ButtonHamburguer } from "../../Buttons/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "./Menu"
import { CartWidget } from "./CartWidget";

function MenuLogo({ logo }) {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className="flex items-center justify-between">
                {/* Logo Barra Menu*/}
                <div>
                    <Link to={"/"}>
                        <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                            {logo}</a>
                    </Link>
                </div>

                {/* Menu Hamburguesa */}
                <div className="flow-root items-center md:hidden" onClick={handleToggle} >
                    <ButtonHamburguer />
                </div>
            </div>
            <div className="grid justify-items-start md:hidden">
                {toggle && <Menu />}
                {toggle && <CartWidget />}
            </div>
        </>
    );
}

export { MenuLogo }