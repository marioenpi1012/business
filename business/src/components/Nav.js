import React from 'react'
import { useState } from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Nav = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className='Nav'>
            <NavLink to='/'>Name</NavLink>
            <div className="links" style={open ? {display:'flex'} :{}} >
                <NavLink to='/menu' onClick={()=>setOpen(!open)} >Menu</NavLink>
                <NavLink to='/location' onClick={()=>setOpen(!open)}>Location</NavLink>
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
