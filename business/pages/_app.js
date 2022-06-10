import "../styles/globals.scss";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Layout from "../components/Layout";


const Loading = () =>{
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect( ()=>{
        setTimeout(()=> {setLoading(false)},8000)
        const handleStart = (url) => (url  !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setTimeout(()=>{setLoading(false)},3000) 
        console.log(router.asPath)
        router.events.on('routerChangeStart', handleStart())
        router.events.on('routerChangeComplete', handleComplete())
        router.events.on('routerChangeError', handleComplete)
        return  () => {
            router.events.off('routerChangeStart', handleStart())
            router.events.off('routerChangeComplete', handleComplete())
            router.events.off('routerChangeError', handleComplete)
        }
        
    },[router.events])
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
