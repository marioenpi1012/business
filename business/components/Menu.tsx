import { useState } from "react";
import MenuItem from './MenuItem'
import Style from '../styles/Menu.module.scss'
import { Product } from '../additional'

export default function Menu({products}) {
    console.log(products.filter(product => product.subcategory === 'tortas'))
    const [category,setCategory]= useState('pupusas');
    const filterMenu = (event)=>{

        setCategory(event.target.getAttribute('data-value'))
        const filterBtns = document.querySelectorAll('[data-value]')
        filterBtns.forEach(btn=>{
            btn.classList.remove(Style.active)
            console.log('working')
        })
        event.target.classList.add(Style.active)
        
    }
    return (
            <div className={Style.Menu}>
                <div className={Style.title}>Menu</div>
                <div className={Style.filterMenu}>
                    <div data-value='pupusas' className={`${Style.filterBtn} ${Style.active}`} onClick={filterMenu}>pupusas</div>
                    <div data-value='breakfast' className={Style.filterBtn} onClick={filterMenu}>breakfast</div>
                    <div data-value='lunch' className={Style.filterBtn} onClick={filterMenu}>lunch</div>
                    <div data-value='mexican food' className={Style.filterBtn} onClick={filterMenu}>Mexican fast food</div>

                </div>
                <div className={Style.container}>
                    <div className={Style.title}>
                        {category === 'breakfast' && 'Breakfast Tacos' || category === 'mexican food' && "tacos"}
                    </div>
                    <div className={Style.items}>
                    {products.map((product:Product)=>(
                        category === product.category &&
                            product.subcategory === 'tacos' 
                                && <MenuItem key={product._id} product={product}  />
                    ))}
                    </div>
                    <div className={Style.title}>
                    {category === 'breakfast' && 'Breakfast ' || category === 'mexican food' && "Gorditas" }
                    </div>
                    <div className={Style.items}>
                        {
                            products.map((product:Product)=>(
                                category === product.category && product.subcategory !== 'tacos' && product.subcategory !== 'tortas' &&
                                <MenuItem key={product._id} product={product} /> 
                            ))
                        }
                    </div>
                        <div className={Style.title}>{category === 'mexican food' && 'Tortas'}</div>
                    <div className={Style.items}>
                        {
                            products.map((product:Product)=>(
                                category === product.category && product.subcategory !== 'tacos' && product.subcategory !== 'gorditas' && product.category !== 'pupusas' &&
                                <MenuItem key={product._id} product={product} /> 
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}


