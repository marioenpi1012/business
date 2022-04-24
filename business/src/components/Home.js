import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <div className='Home'>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Salvadorian food ranging from pupusas, Salvadorean Style breakfast to lunch. Come visit us and have a great time with our delicious food." />
                <link rel="canonical" href="/" />
            </Helmet>
            <div className="container">
                <h1>Coming Soon!!!</h1>
                <h4>Watch this space, we're creating something special.Follow our journey on social media.</h4>
            </div>
            </div>
    )
}

export default Home
