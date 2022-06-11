import "../styles/globals.scss";
import Router from 'next/router'
import { useEffect, useState } from "react";
import Layout from "../components/Layout";


const Loading = () =>{
    const [loading, setLoading] = useState(false);
    useEffect( ()=>{
        const handleStart = (url) => (url  !== Router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === Router.asPath) && setLoading(false)
        Router.events.on('routeChangeStart', handleStart)
        Router.events.on('routeChangeComplete', handleComplete)
        Router.events.on('routeChangeError', handleComplete)
        return  () => {
            Router.events.off('routeChangeStart', handleStart)
            Router.events.off('routeChangeComplete', handleComplete)
            Router.events.off('routeChangeError', handleComplete)
        }
        
    },[Router.events])
    return loading && (
        <div className="spinnerWrapper">
            <div className="spinner" /> 
        </div>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Loading />
                <Component {...pageProps} />
            </Layout>
        </>
            
    );
}

export default MyApp;
