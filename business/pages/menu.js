import React from 'react'

import axios from 'axios';
import Menu from '../components/Menu';
export default function menu({data}){
    return (
            <Menu products={data} />

    )
}
export const getServerSideProps = async () =>{
    const res = await axios.get("https://vercel.com/marioenpi1012/business")
    return {
        props:{
            data:res.data,
        }
    }
}

