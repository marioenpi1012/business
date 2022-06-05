import axios from 'axios';
import Head from 'next/head';
import Menu from '../components/Menu';
export const getServerSideProps = async () =>{
    const res = await axios.get("https://elpanamericano.vercel.app/api/products")
    return {
        props:{
            data:res.data
        }
    }
}
const  menu = ({data}) => {
    return (
        <>  
            <Head>
                <title>EL Panamericano | Menu</title>
            </Head>
            <Menu products={data} />
        </>
    )
}
export default menu;




