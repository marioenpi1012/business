import { Product } from '../additional'
import Style from '../styles/Menu.module.scss'
export default function MenuItem({product}) {
    const {_id, title, desc, price} :Product  = product
    return (
        <>  
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


