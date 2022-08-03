import Image from 'next/image'
import Link from 'next/link'
import Style from "../styles/Home.module.scss"
import Pupusa from '../public/img/pupusas.jpg';
import Pupusa2 from '../public/img/pupusas-2.jpg';
import MiniTacos from '../public/img/mini-tacos.jpg'
import { motion } from 'framer-motion';
const LandingPage = () =>{
    return (
        <div className={Style.LandingPage}>
            <div className={Style.landingImages}>
            <div className={`${Style.imageWrapper} ${Style.image1}`}>
                <Image src={Pupusa2}  loading='lazy'  alt="Pupusas image" quality={90}/>
            </div>
            <div className={`${Style.imageWrapper} ${Style.image2}`}>
                <Image src={MiniTacos}   loading='lazy' alt='Pupusas image' quality={90} />
            </div>
            </div>
            <div 
                className={Style.landingDescription}>
                <div className={Style.title}> El Panamericano</div>
                <div className={Style.description}>
                    <p>Reference the "pan-America" highway that passes through different countries; We offer variaty types of food from other countries such as El Salvador, Honduras and Mexico. </p>
                </div>
                <Link href='/menu' passHref>
                    <motion.input 
                        type="button" 
                        value="Check our Menu" 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                        />
                </Link>
            </div>
            <div className={Style.imagesWrapper}>
                <Image src='/img/mini-tacos.jpg' width='100%' height={100} loading='lazy'  layout='responsive' className={Style.image}/>
                <Image src='/img/tacos.jpg' width={150} height={100} loading='lazy' layout='responsive' className={Style.image}/>
                <Image src='/img/mini-tacos-2.jpg' width={150} height={100}  loading='lazy' layout='responsive' className={Style.image}/>
                <Image src='/img/pupusas-2.jpg' width={150} height={100} loading='lazy' layout='responsive' className={Style.image}/>
                <Image src='/img/mini-tacos-3.jpg' width={150} height={100} loading='lazy' layout='responsive' className={Style.image}/>
                <Image src='/img/pupusas.jpg' width={150} height={100} loading='lazy'  layout='responsive' className={Style.image}/>
            </div>
        </div>
    )
}


export default LandingPage