import AboutUs from "@/components/aboutUs"
import styles from "../styles/pages/index.module.scss"
import CustomHead from "../components/props/customHead"
import GoogleMap from "@/components/googleMap"
import GetDirections from "components/buttons/getDirections"
import ContactForm from "@/components/contactForm"

const Contact = () => {

    return ( 
        <>
            <CustomHead
                title="Contact"
                description="Contact Rola"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/contact/"
            />
            <div className={styles.container}>
                <main className={styles.main}>
                     <GoogleMap />
                     <GetDirections />
                </main>
                <footer className={styles.footer}>
                    <ContactForm />
                    <AboutUs />
                </footer>
            </div>
        </>
    );
}
 
export default Contact;