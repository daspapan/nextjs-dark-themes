import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'

const Header = () => {
    return (
        <header className="bg-grey-100 p-4">
            <nav className="container">
                <ul className="flex gap-3">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>  
                    <li>
                        <NavLink href="/about">About</NavLink>
                    </li>  
                    <li>
                        <NavLink href="/about/teams">Teams</NavLink>
                    </li>  
                    <li>
                        <NavLink href="/todos">Todos</NavLink>
                    </li>
                    <li>
                        <NavLink href="/guestbook">Guestbook</NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">Contact</NavLink>
                    </li>  
                </ul>  
            </nav> 
        </header>
    )
}

export default Header