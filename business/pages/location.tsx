import React from 'react'
import Style from '../styles/Location.module.scss'
import Head from 'next/head'
const Place = () => {
    return (
        <>
            <Head>
                <title>EL Panamericano | Location</title>
            </Head>
            <div className={Style.Location}>
                <div className={Style.container}>
                    <div className={Style.address}>
                        11503 Southwest Fwy
                    </div>
                    <div className={Style.hoursOpen}>
                        <div className={Style.phone}>
                            000-000-0000
                        </div>
                        <div className={Style.days}>
                            Monday - Saturday
                        </div>
                        <div className={Style.hours}>
                            5:00 am - 3:00 pm
                        </div>
                    </div>
                </div>
                <div className={Style.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.290345311664!2d-95.56743658489401!3d29.65334798202635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7e113bcc0e3%3A0x61bc164a5f99fd6b!2s11503%20Southwest%20Fwy%2C%20Houston%2C%20TX%2077031!5e0!3m2!1sen!2sus!4v1650657700568!5m2!1sen!2sus" width="400" height="300" allowFullScreen style={{border:'none'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>


    )
}

export default Place
