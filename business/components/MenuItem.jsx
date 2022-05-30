import Style from '../styles/Menu.module.scss'

export default function MenuItem({product, subcat}) {
    const {_id, title, desc, price, subcategory}  = product
    return (
        <>  
            {subcat && subcat}
            <div key={_id} className={Style.item}>
                <div className={Style.titleAndPrice}>
                    <div className={Style.name}>{title}</div>
                    <div className={Style.price}>${price}</div>
                </div>
                <div className={Style.description}>
                    {desc && desc}
                </div>
            </div>
        </>
    )
}


