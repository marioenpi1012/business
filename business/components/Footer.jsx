import { FaInstagramSquare, FaInstagram } from "react-icons/fa";
import Style from '../styles/Footer.module.scss'
import Link from "next/link";
function Footer() {
    return (
        <div className={Style.footer}>
            <div className={Style.socialMedia}>
                <a href='https://www.instagram.com/el_panamericano_deli/' target="_blank">
                    <FaInstagram />
                </a>
            </div>
            <div className={Style.info}>
                <div className={Style.location}>
                    11503 Southwest FWY
                </div>
                <div className={Style.phoneNumber}>
                    (000) 000-0000
                </div>
            </div>
        </div>
    )
}

export default Footer
