import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import Menu from '../components/Menu';
export default function menu({data}){
    console.log('menu',data)
    return (
        <Layout>
            <Menu products={data}  />
        </Layout>

    )
}
export const getServerSideProps = async () =>{
    const res = await axios.get("http://localhost:3000/api/products")
    return {
        props:{
            data:res.data,
        }
    }
}

