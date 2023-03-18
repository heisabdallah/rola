import styles from "../styles/pages/products.module.scss"
import CustomHead from "../components/props/customHead"
import AboutUs from "@/components/aboutUs"

const About = () => {

    return ( 
        <>
            <CustomHead
                title="About"
                description="Rola spare parts about"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/about"
            />
            <div className={styles.container}>
                <header>
                    HEADER
                </header>
                <main className={styles.main}>
                    <AboutUs />
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        </>
     )
}

export default About;