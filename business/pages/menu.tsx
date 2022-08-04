import axios from 'axios';
import Head from 'next/head';
import Menu from '../components/Menu'
import { GetServerSideProps } from 'next';
import { Products } from '../additional';
export const getServerSideProps : GetServerSideProps = async () =>{
    const res = await axios.get("https://elpanamericano.vercel.app/api/products")
    const products : Products= await res.data
    return {
        props:{
            products:products
        }
    }
}
const  menu = ({products}) => {
    return (
        <>  
            <Head>
                <title>EL Panamericano | Menu</title>
            </Head>
            <Menu products={products} />
        </>
    )
}
export default menu;




