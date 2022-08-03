import {useEffect, useState } from 'react';
import { FaBars,FaInstagram,FaTimes } from "react-icons/fa";
import Link from 'next/link';
import Style from '../styles/Nav.module.scss'
import Footer from './Footer';
import { motion } from 'framer-motion';
const Nav = () => {
    const [open,setOpen] = useState(false)
    useEffect(()=>{
        setOpen(false)
        // working admin padding
        const nav = document.querySelector(`.${Style.Nav}`).clientHeight
        document.documentElement.setAttribute('scroll-padding',`${nav}px` )
    },[])
    const variants = {
        open:{
            transition:{staggerChildren: 0.07, delayChildren:0.2}
        },
        closed:{
            transition:{staggerChildren:0.05, staggerDirection:-1}
        }
    }
    const liVariants = {
        open:{
            y:0,
            opacity:1,
            transition:{
                y: {stiffness:1000, velocity:-100}
            }
        },
        closed:{
            y:50,
            opacity:0,
            transition:{
                y:{stiffness:1000}
            }
        }
    }
    return (
        <div className={Style.Nav}>
            <Link href='/'  > 
                <a className={Style.name} onClick={()=> open && setOpen(!open)}>El Panamericano </a> 
            </Link>
            <div className={open ? `${Style.mobileMenu} ${Style.burgerOpen} ` : Style.mobileMenu} onClick={()=>setOpen(!open)}>
                <div className={Style.burger}></div>
            </div>
            <nav 
                className={open ? `${Style.links} ${Style.open} `: Style.links } 
                style={open ? {display:'flex'} : {}} 
                >
                <motion.ul
                    variants={variants}
                    initial='closed'
                    animate={open ? 'open' :'closed'}
                >
                    <motion.li
                        variants={liVariants}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <Link href='/' passHref > 
                            <a onClick={()=>setOpen(!open)}>Home</a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariants}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <Link href='/menu' passHref > 
                            <a onClick={()=>setOpen(!open)}>Menu</a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariants}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <Link href='/location' passHref> 
                            <a onClick={()=>setOpen(!open)}>Location</a>
                        </Link>
                    </motion.li>
                </motion.ul>
            </nav>
            
            
        </div>
    )
}

export default Nav
