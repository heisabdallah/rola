import styles from "styles/pages/index.module.scss"
import CustomHead from "components/props/customHead"
// import GetDirections from "components/buttons/getDirections"
import ImageGrid from "@/components/imageGrid"
import ContactForm from "@/components/contactForm"
import Link from "next/link"
import Image from "next/image"
import logo from "public/logo.png"
import { useState } from "react"
import AboutUs from "@/components/aboutUs"

export default function Home(){
    
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
                title="Home"
                description="Rola spare parts awesome landing page"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/home/"
            />
            <div className={styles.container}>
                    <main className={styles.main} onClick={handleCloseNav}>
                        <section>
                            <div className={styles.hero_section}>
                                <h1>Affordable meets excellence</h1>
                                 <button className={styles.hero_cta}><Link href="/products">Browse Our Products</Link></button>
                            </div>
                        </section>
                        {/* <GetDirections /> */}
                        <Link className={styles.contact_scroll} href="#contact-section" scroll={false} >Contact Section</Link>
                        <section>
                            <AboutUs />
                        </section>
                        <section>
                            <ImageGrid />
                        </section>
                    </main>

                    <footer className={styles.footer} onClick={handleCloseNav} id="contact-section">
                        <ContactForm />
                        <AboutUs />
                    </footer>
                </div>
        </>
    )
}
