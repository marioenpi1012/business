import { useState } from "react";
import MenuItem from '../components/MenuItem'
import Style from '../styles/Menu.module.scss'
export default function Menu({products}) {
    console.log(products)
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
                    <div data-value='pupusas' className={Style.filterBtn ,Style.active} onClick={filterMenu}>pupusas</div>
                    <div data-value='breakfast' className={Style.filterBtn} onClick={filterMenu}>breakfast</div>
                    <div data-value='lunch' className={Style.filterBtn} onClick={filterMenu}>lunch</div>
                    <div data-value='mexican food' className={Style.filterBtn} onClick={filterMenu}>Tacos/Gorditas</div>

                </div>
                <div className={Style.container}>
                    <div className={Style.title}>
                        {category === 'breakfast' && 'Breakfast Tacos' || category === 'mexican food' && "tacos"}
                    </div>
                    <div className={Style.items}>
                    {products.map((product)=>(
                        category === product.category &&
                            product.subcategory === 'tacos' 
                                && <MenuItem key={product._id} product={product}  />
                    ))}
                    </div>
                    <div className={Style.title}>
                    {category === 'breakfast' && 'Breakfast ' || category === 'mexican food' && "Gorditas"}
                    </div>
                    <div className={Style.items}>
                        {
                            products.map((product)=>(
                                category === product.category && product.subcategory !== 'tacos' &&
                                <MenuItem key={product._id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}


