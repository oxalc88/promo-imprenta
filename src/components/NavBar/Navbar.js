import { CartWidget } from "./NavbarElemens/CartWidget";
import { MenuLogo } from "./NavbarElemens/MenuLogo";
import { NavbarMenuElement } from "./NavbarElemens/NavbarMenu";
import { Search } from "./NavbarElemens/Search";

function Navbar (){
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <MenuLogo logo='PromoImprenta'/>
                <Search />
                <div className="items-center md:flex">
                    <NavbarMenuElement />
                    <CartWidget />     
                </div>
            </div>
        </nav>
    );
}

export {Navbar};