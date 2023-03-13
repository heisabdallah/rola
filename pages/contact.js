import Image from "next/image"
import MainContent from "@/components/aboutUs"
import styles from "../styles/pages/index.module.scss"
import CustomHead from "../components/props/customHead"
import ContactForm from "@/components/contactForm"
import Link from "next/link"
import { useState } from "react"
import logo from "public/logo.png"

const Contact = () => {

    const [nav, setNav] = useState(styles.nav)

    const handleOpenNav = () => {
        setNav(styles.openNav)
    }

    const handleCloseNav = () => {
        setNav(styles.closeNav)
    }

    return ( 
        <>
            <CustomHead
                title="Contact"
                description="Contact Rola"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/contact/"
            />
            <div className={styles.container}>
                <footer className={styles.footer} onClick={handleCloseNav}>
                    <ContactForm />
                    
                    <MainContent />
                </footer>
            </div>
        </>
    );
}
 
export default Contact;