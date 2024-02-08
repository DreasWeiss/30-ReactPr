import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'

import { NavStyle } from './NavStyle'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function ResponsiveNav() {

    const [showEl, setShowEl] = useState({
        navbarNav: true,
        hamburgerIcon: false,
        closeIcon: false,
        navOpened: false
    })

    useEffect(() => {
        window.onresize = () => {
            let windowWidth = window.innerWidth;
            // console.log(windowWidth)
            windowWidth > 600 && setShowEl(
                {
                    navbarNav: true,
                    hamburgerIcon: false
                }
            )
            windowWidth < 600 && setShowEl(
                {
                    navbarNav: false,
                    hamburgerIcon: true
                }
            )
        }
    }, [])
    return (
        <NavStyle className='navbar bg-primary text-light'>
            <div className="navbar-logo">
                <a href="#" className='navbar-brand'>Dreas Weiss</a>
                {/* open and close icons */}
                {showEl.hamburgerIcon && <AiOutlineMenu />}
                {showEl.closeIcon && <AiOutlineClose />}

            </div>
            <div className="navbar-collapse">
                {showEl.navbarNav ? (
                    <ul className="navbar-items">
                        <NavItem text={'Home'} active='active' />
                        <NavItem text={'About'} />
                        <NavItem text={'Contact'} />
                    </ul>) : null}
            </div>
        </NavStyle>
    )
}
