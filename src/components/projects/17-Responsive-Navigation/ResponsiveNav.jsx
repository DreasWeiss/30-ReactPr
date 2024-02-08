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

    const [pageTitle, setPageTitle] = useState('')

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

    const openNav = () => {
        setShowEl({
            navbarNav: true,
            hamburgerIcon: false,
            closeIcon: true,
            navOpened: true
        })
    }
    const closeNav = () => {
        setShowEl({
            navbarNav: false,
            hamburgerIcon: true,
            closeIcon: false,
            navOpened: false
        })
    }

    const handleActive = (e) => {
        document.querySelectorAll('.nav-link').forEach((navLink) => navLink.classList.remove('active'));
        e.target.classList.add('active');
        setPageTitle(e.target.innerText);
    }

    return (
        <>
            <NavStyle className={`navbar bg-primary text-light ${showEl.navOpened && "showNavbar"}`}>
                <div className="navbar-logo">
                    <a href="#" className='navbar-brand'>Dreas Weiss</a>
                    {/* open and close icons */}
                    {showEl.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
                    {showEl.closeIcon && <AiOutlineClose onClick={closeNav} />}

                </div>
                <div className="navbar-collapse">
                    {showEl.navbarNav ? (
                        <ul className={`navbar-items ${showEl.navOpened && "showNavbar"}`}>
                            <NavItem text={'Home'} active='active' onClick={handleActive} />
                            <NavItem text={'About'} onClick={handleActive} />
                            <NavItem text={'Contact'} onClick={handleActive} />
                        </ul>) : null}
                </div>
            </NavStyle>
            <h1 className="title text-center text-primary">{!pageTitle ? 'Home' : pageTitle}</h1>
        </>
    )
}
