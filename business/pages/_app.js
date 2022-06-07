import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";


const Loading = () =>{
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {
            setLoading(false)
        }, 5000); 

        router.events.on('routerChangeStart', handleStart)
        router.events.on('routerChangeComplete', handleComplete)
        router.events.on('routerChangeError', handleComplete)
        console.log('working.')
        return  () => {
        router.events.off('routerChangeStart', handleStart)
        router.events.off('routerChangeComplete', handleComplete)
        router.events.off('routerChangeError', handleComplete)
        console.log('working..')
        }
        
    },[])
    return loading && (
        <div className="spinnerWrapper">
            <div className="spinner" /> 
        </div>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Loading />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
            
    );
}

export default MyApp;
