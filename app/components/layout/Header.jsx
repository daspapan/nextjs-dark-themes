import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'
import ThemeButton from '@/components/ui/ThemeButton'

const Header = () => {
    return (
        <header className="bg-grey-100 p-4">

            <nav className="container flex items-center justify-between">

                <ul className="flex gap-3 p-4">
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

                <ThemeButton/>

            </nav> 

        </header>
    )
}

export default Header