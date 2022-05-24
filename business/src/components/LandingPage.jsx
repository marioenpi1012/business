import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <div className="landingImages">
                <Image src='/img/pupusas.jpg'  height={200} width={300}  alt="Pupusas image" />
                <Image src='/img/pupusas-2.jpg' height={200} width={300}  alt="Pupusas image" />
            </div>
            <div className="landingDescription">
                <div className="title">El Panamericano</div>
                <div className="description">
                    <p>Reference the "pan-America" highway that passes through different countries; We offer variaty types of food from other countries such as El Salvador, Honduras and Mexico. </p>
                </div>
                <Link href='/menu'>
                    <input type="button" value="Check our Menu" />
                </Link>
            </div>
            <div className="imagesWrapper">
                <Image src='/img/mini-tacos.jpg' height={100} width={200} />
                <Image src='/img/mini-tacos-2.jpg' height={200} width={300} />
                <Image src='/img/tacos.jpg' height={200} width={300} />
                <Image src='/img/mini-tacos-3.jpg' height={200} width={300} />
            </div>
        </div>
    )
}

export default LandingPage
