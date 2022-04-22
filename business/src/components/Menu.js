import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {menuList} from '../menuList'
const Menu = () => {
    console.log(menuList)
    const [category,setCategory]= useState('pupusas');
    const filterMenu = (event)=>{
        setCategory(event.target.value)
        const filterBtns = document.querySelectorAll('.filterBtn')
        filterBtns.forEach(btn=>{
            btn.classList.remove('active')
        })
        event.target.classList.add('active')
        
    }

    return (
        <div className="Menu">
        <Helmet>
            <title>Menu</title>
            <meta name="description" content="We offer Salvadorean style food; View our menu and we hope to see you soon"/>
            <link rel="canonical" href="/menu" />
        </Helmet>
            <div className="title">Menu</div>
            <div className="filterMenu">
                <input type='button' value='pupusas' className='filterBtn active' onClick={filterMenu}/>
                <input type='button' value='breakfast' className='filterBtn' onClick={filterMenu}/>
                <input type='button' value='lunch' className='filterBtn' onClick={filterMenu}/>
                
            </div>
            <div className="container">
                <div className="items">
                    {
                        menuList.map((item)=>(
                            category === item.category 
                            ? (
                                <div key={item.id} className="item">
                                    <div className="titleAndPrice">
                                        <div className="name">{item.name}</div>
                                        <div className="price">${item.price}</div>
                                    </div>
                                    <div className="description">
                                        {item.description ? item.description : ""}
                                    </div>
                                </div>
                            )
                            :""
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu