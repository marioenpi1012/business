import axios from "axios"
import { ChangeEvent, useState } from "react"
import Style from '../styles/Add.module.scss'
import { Product } from "../additional"
type Props = {
    edit?:boolean,
    productInfo?:Product
}
export default function Add({productInfo, edit}:Props) {
    const {_id, title, desc, price,category, subcategory} = productInfo || {}
    const [close, setClose] = useState(false)
    const [TITLE,setTitle] = useState<string>(title ? title : null)
    const [DESC,setDesc] = useState<string>(desc ? desc : null)
    const [PRICE,setPrice] = useState<number>(price ? price : null)
    const [CATEGORY,setCategory] = useState<string>(category ? category : null)
    const [SUBCATEGORY,setSubcategory] = useState<string>(subcategory ? subcategory : null)


    const handleEdit = async () =>{
        try {
            const newProduct ={
                title:TITLE,
                desc:DESC,
                price:PRICE,
                category:CATEGORY,
                subcategory:SUBCATEGORY
            }
            const res = await axios.put(`https://elpanamericano.vercel.app/api/products/${_id}`,newProduct)
        } catch (err) {
        }
    }
    const handleCreate = async () =>{
        try {
            const newProduct ={
                title:TITLE,
                desc:DESC,
                price:PRICE,
                category:CATEGORY,
                subcategory:SUBCATEGORY
            }
            const res = await axios.post('https://elpanamericano.vercel.app/api/products',newProduct)

        } catch (err) {
        }

    }
    return (
        <div className={Style.addWrapper}>
            <div className={Style.wrapper}>
                <div className={Style.controls}>
                    <h1>{edit ? "Edit" : "Add"} Product</h1>
                    <div onClick={()=>setClose(!close)}>X</div>
                </div>
                <div className={Style.item}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder='Title' value={TITLE} />
                    <label htmlFor="desc">Description</label>
                    <textarea name="desc" onChange={(e) => setDesc(e.target.value)} placeholder='Description' value={DESC}/>
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" onChange={(e) => setCategory(e.target.value)} placeholder='Category' value={CATEGORY}/>
                    <label htmlFor="subcategory">Subcategory</label>
                    <input type="text" name="subcategory" onChange={(e) => setSubcategory(e.target.value)} placeholder='Subcategory' value={SUBCATEGORY}/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" onChange={(e) => setPrice(Number(e.target.value))} placeholder='Price' value={PRICE}/>
                </div>
                <input type="button" value="Create" onClick={edit ? handleEdit : handleCreate} />
            </div>
        </div>
    )
}
