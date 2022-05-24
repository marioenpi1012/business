import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import LandingPage from '../components/LandingPage'
import axios from 'axios'
const Home = (props, {products,admin}) => {
    console.log(products)
    return (
        <Layout>
            <LandingPage />
        </Layout>
    )
}
export const getServeSideProps = async (ctx)=>{
    const res = await axios.get("http://localhost:3000/api/products")
    console.log(res)
    return {
        props:{
            products: res.data,
            admin
        }
    }
}
export default Home
