import Image from 'next/image'
import Link from 'next/link'
import Style from "../styles/Home.module.scss"
const LandingPage = () =>{
    return (
        <div className={Style.LandingPage}>
            <div className={Style.landingImages}>
                <Image src='/img/pupusas.jpg'  height={200} width={300}  alt="Pupusas image" />
                <Image src='/img/pupusas-2.jpg' priority={true} height={200} width={300} alt="Pupusas image" />
            </div>
            <div className={Style.landingDescription}>
                <div className={Style.title}> El Panamericano</div>
                <div className={Style.description}>
                    <p>Reference the "pan-America" highway that passes through different countries; We offer variaty types of food from other countries such as El Salvador, Honduras and Mexico. </p>
                </div>
                <Link href='/menu'>
                    <input type="button" value="Check our Menu" />
                </Link>
            </div>
            <div className={Style.imagesWrapper}>
                <Image src='/img/mini-tacos.jpg' width={150} height={100}  />
                <Image src='/img/mini-tacos-2.jpg' width={150} height={100}  />
                <Image src='/img/tacos.jpg' width={150} height={100} />
                <Image src='/img/mini-tacos-3.jpg' width={150} height={100} />
            </div>
        </div>
    )
}


export default LandingPage