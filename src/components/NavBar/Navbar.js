import { useState } from "react";
import { CartWidget } from "./NavbarElemens/CartWidget";
import { Menu } from "./NavbarElemens/Menu";
import { MenuLogo } from "./NavbarElemens/MenuLogo";
import { Search } from "./NavbarElemens/Search";
import ShoppingCart from "../../containers/ShoppingCart.jsx";

function Navbar() {
    const [toggleOrders, setToggleOrders] = useState(false)


    return (
        <>
            <nav className="bg-white shadow dark:bg-gray-800 flex flex-nowrap" >
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <MenuLogo logo='PromoImprenta' />
                    <Search />
                    <div className="items-center md:flex hidden">
                        <Menu />


                    </div>
                    <div className="justify-items-start md:flex hidden" onClick={() => setToggleOrders(!toggleOrders)}>
                        <CartWidget />
                    </div>
                </div>
            </nav>
            {toggleOrders && <ShoppingCart />}
        </>

    );
}

export { Navbar };