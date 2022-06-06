import {useEffect, useState } from 'react';
import { FaBars,FaInstagram,FaTimes } from "react-icons/fa";
import Link from 'next/link';
import Style from '../styles/Nav.module.scss'
import Footer from './Footer';
const Nav = () => {
    const [open,setOpen] = useState(false)
    useEffect(()=>{
        setOpen(false)
        // working admin padding
        const nav = document.querySelector(`.${Style.Nav}`).clientHeight
        document.documentElement.setAttribute('scroll-padding',`${nav}px` )
    },[])
    
    return (
        <div className={Style.Nav}>
            <Link href='/'>El Panamericano</Link>
            <div className={open ? `${Style.mobileMenu} ${Style.burgerOpen} ` : Style.mobileMenu} onClick={()=>setOpen(!open)}>
                <div className={Style.burger}></div>
            </div>
            <nav className={open ? `${Style.links} ${Style.open} `: Style.links } style={open ? {display:'flex'} : {}} >
                <Link href='/menu' > 
                    <a onClick={()=>setOpen(!open)}>Menu</a>
                </Link>
                <Link href='/location'> 
                    <a onClick={()=>setOpen(!open)}>Location</a>
                </Link>
                <a className={Style.instagram} href='https://www.instagram.com/el_panamericano_deli/' target="_blank">
                    <FaInstagram />
                </a>
            </nav>
            
            
        </div>
    )
}

export default Nav
