import React from 'react'
import { useState } from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
import Link from 'next/link';
const Nav = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className='Nav'>
            <Link href='/'>El Panamericano</Link>
            <div className="links" style={open ? {display:'flex'} :{}} >
                <Link href='/menu' onClick={()=>setOpen(!open)} >Menu</Link>
                <Link href='/location' onClick={()=>setOpen(!open)}>Location</Link>
            </div>
            <div className="mobileMenu" onClick={()=>setOpen(!open)}>
                {open 
                    ?<FaTimes/>
                    :<FaBars/>
                }
            </div>
            
        </div>
    )
}

export default Nav
