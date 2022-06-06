import { FaInstagramSquare, FaInstagram } from "react-icons/fa";
import Style from '../styles/Footer.module.scss'
import Link from "next/link";
import { useState, useEffect } from "react";
function Footer() {
    const [url, setUrl] = useState()

    useEffect(() => {
        var userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent );
        if( ios ) {
            if ( safari ) {
                //browser
                setUrl('http://maps.apple.com/?q=11503 Southwest FWY')
            } else if ( !safari ) {
                //webview
                setUrl('https://maps.google.com/?q=11503 Southwest FWY')
            };
            } else {
                //not iOS
                setUrl('https://maps.google.com/?q=11503 Southwest FWY')
            };
    }, [])
    
    
    return (
        <div className={Style.footer}>
            <div className={Style.socialMedia}>
                <a href='https://www.instagram.com/el_panamericano_deli/' target="_blank">
                    <FaInstagram />
                </a>
            </div>
            <div className={Style.info}>
                <a href={url} target="_blank" className={Style.location}>
                    11503 Southwest FWY
                </a>
                <div className={Style.phoneNumber}>
                    (000) 000-0000
                </div>
            </div>
        </div>
    )
}

export default Footer
