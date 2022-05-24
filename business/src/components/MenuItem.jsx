export default function MenuItem({product, subcat}) {
    console.log(product)
    const {_id, title, desc, price, subcategory}  = product
    return (
        <>  
            {subcat && subcat}
            <div key={_id} className="item">
                <div className="titleAndPrice">
                    <div className="name">{title}</div>
                    <div className="price">${price}</div>
                </div>
                <div className="description">
                    {desc && desc}
                </div>
            </div>
        </>
    )
}


