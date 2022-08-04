import Head from 'next/head'
import LandingPage from '../components/LandingPage'

const Home = () => {
    return (
        <>
            <Head>
                <title>EL Panamericano</title>
                <meta name="description" content="Best pupusas and tacos" />
            </Head>
            <LandingPage />
        </>
            
    )
}
export default Home

