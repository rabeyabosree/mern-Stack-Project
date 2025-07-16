import React, { useContext, useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, UserCircle, UserRound } from 'lucide-react';
import { Contex } from '../pages/contex/ShopContex';

function Header() {
    const {token ,getCartCount} = useContext(Contex);
    const [menuOpend, setMenuOpend] = useState(false);

    const handleMenu = () => {
        setMenuOpend((prev) => !prev);
    };

    return (
        <header className="max-padd-container w-full">
            <div className="flexBetween py-3">
                {/* logo left side*/}
                <Link className="flex flex-1">
                    <div className="bold-32">
                        Outfit <span className="text-secondary">o</span>
                    </div>
                </Link>

                <div>
                    <Navbar
                        MenuContainer={`${
                            menuOpend
                                ? 'flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/z-50'
                                : 'hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1'
                        }`}
                    />
                </div>
                <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8">
                    <Menu
                        className="xl:hidden cursor-pointer text-2xl sm:text-3xl"
                        onClick={handleMenu}
                    />
                    <Search className="cursor-pointer text-lg sm:text-xl md:text-2xl" />
                    <Link to={"/cart"} className="flex relative">
                        <ShoppingCart className="text-lg sm:text-xl md:text-2xl" />
                        <span className="absolute bg-secondary text-white text-[12px] font-semibold left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
                           {getCartCount()}
                        </span>
                    </Link>
                    <div>
                        <div>
                            {token ? (
                                <div>
                                    <UserCircle className="text-lg sm:text-xl md:text-2xl" />
                                </div>
                            ) : (
                                <div>
                                    <button className="btn-light flexCenter gap-x-2 px-2 py-1 sm:px-4 sm:py-2">
                                        Login <UserRound className="text-lg sm:text-xl md:text-2xl" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

