import { useState } from "react";
import axios from "axios";
import MenuItem from '../components/MenuItem'

export default function Menu({products}) {
    console.log(products)
    const [category,setCategory]= useState('pupusas');
    const filterMenu = (event)=>{
        console.log(event.target.getAttribute('data-value'))
        setCategory(event.target.getAttribute('data-value'))
        const filterBtns = document.querySelectorAll('.filterBtn')
        filterBtns.forEach(btn=>{
            btn.classList.remove('active')
        })
        event.target.classList.add('active')
        
    }
    return (
            <div className="Menu">
                <div className="title">Menu</div>
                <div className="filterMenu">
                    <div data-value='pupusas' className='filterBtn active' onClick={filterMenu}>pupusas</div>
                    <div data-value='breakfast' className='filterBtn' onClick={filterMenu}>breakfast</div>
                    <div data-value='lunch' className='filterBtn' onClick={filterMenu}>lunch</div>
                    <div data-value='mexican food' className='filterBtn' onClick={filterMenu}>Tacos/Gorditas</div>

                </div>
                <div className="container">
                    <div className="title">
                        {category === 'breakfast' && 'Breakfast Tacos' || category === 'mexican food' && "tacos"}
                    </div>
                    <div className="items">
                    {products.map((product)=>(
                        category === product.category &&
                            product.subcategory === 'tacos' 
                                && <MenuItem product={product}  />
                    ))}
                    </div>
                    <div className="title">
                    {category === 'breakfast' && 'Breakfast ' || category === 'mexican food' && "Gorditas"}
                    </div>
                    <div className="items">
                        {
                            products.map((product)=>(
                                category === product.category && product.subcategory !== 'tacos' &&
                                <MenuItem  product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}


