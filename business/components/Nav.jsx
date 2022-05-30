import {useEffect, useState } from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
import Link from 'next/link';
import Style from '../styles/Nav.module.scss'
const Nav = () => {
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        setOpen(false)
    },[])
    
    return (
        <div className={Style.Nav}>
            <Link href='/'>El Panamericano</Link>
            <div className={Style.links} style={open ? {display:'flex'} : {}} >
                <Link href='/menu' > 
                    <a onClick={()=>setOpen(!open)}>Menu</a>
                </Link>
                <Link href='/location'> 
                    <a onClick={()=>setOpen(!open)}>Location</a>
                </Link>
            </div>
            <div className={Style.mobileMenu} onClick={()=>setOpen(!open)}>
                {open 
                    ?<FaTimes/>
                    :<FaBars/>
                }
            </div>
            
        </div>
    )
}

export default Nav
