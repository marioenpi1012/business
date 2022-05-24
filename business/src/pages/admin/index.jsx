import axios from "axios"
import { useState } from "react"
import Add from '../../components/Add'
export default function index({products}) {
    const [productsList,setProductsList] = useState(products)
    const [edit,setEdit] = useState(false)
    const [create,setCreate] = useState(false)
    const [editProduct,setEditProduct] = useState(null)
    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
    });
    return map;
}
    const grouped = groupBy(productsList, product => product.category)
    const groupedObj = []
    for(let i = 0; i< Array.from(grouped).length; i++){
        Array.from(grouped)[i][1].map(item => groupedObj.push(item))
    }
    console.log('group',groupedObj)
    const handleEdit = async (product) =>{
        setEditProduct(product)
        setEdit(!edit)
    }
    const handleDelete = async (id) =>{
        try {
            await axios.delete('http://localhost:3000/api/products/' + id)
            setProductsList(productsList.filter((products) => products._id !== id))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='admin-container'>
            <div className="item">
                <div className="heading">
                    <h1>Products</h1>
                    <input type="button" value="Create new product" onClick={()=>setCreate(!create)} />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {groupedObj.map((product)=>(
                    <tbody key={product._id}>
                        <tr>
                            <td className='price'>{(product._id)}</td>
                            <td>{product.category}</td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>
                                <input type="button" value="Edit" onClick={()=> handleEdit(product)} />
                                <input type="button" value="Delete" onClick={()=>handleDelete(product._id)} />
                            </td>
                        </tr>
                    </tbody>
                    ))}
                    
                </table>
            </div>
            {edit && <Add edit productInfo={editProduct}/>}
            {create && <Add />}
        </div>
    )
}

export const getServerSideProps = async () =>{
    const productRes = await axios.get('http://localhost:3000/api/products')

    return{
        props:{
            products:productRes.data
        }
    }
}

