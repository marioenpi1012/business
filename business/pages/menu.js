import React from 'react'
import axios from 'axios';
import Head from 'next/head';
import Menu from '../components/Menu';
export default function menu({data}){
    return (
        <>  
            <Head>
                <title>EL Panamericano | Menu</title>
            </Head>
            <Menu products={data} />
        </>
        

    )
}


export const getServerSideProps = async () =>{
    const res = await axios.get("https://elpanamericano.vercel.app//api/products")
    return {
        props:{
            data:res.data,
        }
    }
}

