import axios from "axios"
import { useState } from "react"

export default function Add({productInfo, edit}) {
    const {_id, title, desc, price,category, subcategory} = productInfo || {}

    const [TITLE,setTitle] = useState(title ? title : '')
    const [DESC,setDesc] = useState(desc ? desc : '')
    const [PRICE,setPrice] = useState(price ? price : '')
    const [CATEGORY,setCategory] = useState(category ? category : '')
    const [SUBCATEGORY,setSubcategory] = useState(subcategory ? subcategory : '')


    const handleEdit = async () =>{
        try {
            const newProduct ={
                title:TITLE,
                desc:DESC,
                price:PRICE,
                category:CATEGORY,
                subcategory:SUBCATEGORY
            }
            const res = await axios.put(`https://vercel.com/marioenpi1012/business/api/products/${_id}`,newProduct)
        } catch (err) {
            console.log(err)      
        }
    }
    const handleCreate = async () =>{
        
        try {
            console.log('title', title)
            const newProduct ={
                title:TITLE,
                desc:DESC,
                price:PRICE,
                category:CATEGORY,
                subcategory:SUBCATEGORY
            }
            const res = await axios.post('https://vercel.com/marioenpi1012/business/api/products',newProduct)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='addWrapper'>
            <div className="wrapper">
                    <span>X</span>
                    <h1>{edit ? "Edit" : "Add"} a new Product</h1>
                    <div className="item">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder='Title' value={TITLE} />
                        <label htmlFor="desc">Description</label>
                        <textarea type="text" name="desc" onChange={(e) => setDesc(e.target.value)} placeholder='Description' value={DESC}/>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" onChange={(e) => setCategory(e.target.value)} placeholder='Category' value={CATEGORY}/>
                        <label htmlFor="subcategory">Subcategory</label>
                        <input type="text" name="subcategory" onChange={(e) => setSubcategory(e.target.value)} placeholder='Subcategory' value={SUBCATEGORY}/>
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} placeholder='Price' value={PRICE}/>
                    </div>
                    <input type="button" value="Create" onClick={edit ? handleEdit : handleCreate} />
            </div>
        </div>
    )
}
