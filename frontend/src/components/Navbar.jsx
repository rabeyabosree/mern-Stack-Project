import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar( {MenuContainer}) {
    const navMenu = [
        { path: "/", title: "Home" },
        { path: "/collection", title: "Collection" },
        { path: "/testimonials", title: "Testimonials" },
        { path: "/products", title: "Product" },
        { path: "/contact", title: "Contact" },
    ]
    return (
        <div className={`${MenuContainer}`}>
            {navMenu.map((link) => (
                <NavLink key={link.title} to={link.path}
                className={({isActive})=> `${isActive  ? "active-link" : " "} px-2 py-2 rounded-full`}>
                    {link.title}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar
