import styles from "styles/pages/index.module.scss"
import CustomHead from "components/props/customHead"
import GetDirections from "components/buttons/getDirections"
import ImageGrid from "@/components/imageGrid"
import GoogleMap from "@/components/googleMap"
import ContactForm from "@/components/contactForm"
import AboutUs from "@/components/aboutUs"
import Link from "next/link"

export default function Home(){

    return (
        <>
            <CustomHead
                title="Home"
                description="Rola spare parts awesome landing page"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/home/"
            />
            <div className={styles.container}>
                    <main className={styles.main}>
                        <section>
                            <div className={styles.hero_section}>
                                <h1>Affordable meets excellence</h1>
                                 <button className={styles.hero_cta}><Link href="/products">Browse Our Products</Link></button>
                            </div>
                        </section>
                        <GetDirections />
                        <Link className={styles.contact_scroll} href="#contact-section" scroll={false} >Contact Section</Link>
                        <section>
                            <AboutUs />
                        </section>
                        <section>
                            <ImageGrid />
                        </section>
                    </main>

                    <footer className={styles.footer} >
                        <GoogleMap />
                        <GetDirections />
                        <div id="contact-section">

                        </div>
                        <ContactForm />
                        <AboutUs />
                    </footer>
                </div>
        </>
    )
}
