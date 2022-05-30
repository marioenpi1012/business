import React from 'react'

import axios from 'axios';
import Menu from '../components/Menu';
export default function menu({data}){
    return (
            <Menu products={data} />

    )
}
export const getServerSideProps = async () =>{
    const res = await axios.get("https://business-azure.vercel.app/")
    return {
        props:{
            data:res.data,
        }
    }
}

