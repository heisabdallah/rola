import styles from "../styles/pages/products.module.scss"
import CustomHead from "../components/props/customHead"

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
                <main className={styles.main}>
                    <h1>About PAGE</h1>
                    <p>Sunt velit et mollit esse enim do cillum consectetur dolore excepteur magna. Nisi tempor minim anim ea magna ad voluptate in. Amet deserunt magna incididunt consectetur. Eu qui culpa sit minim dolor esse consequat.</p>
                    <p>Eiusmod eu nulla ad duis veniam mollit commodo commodo dolor. Id cillum occaecat voluptate ipsum et laboris proident occaecat occaecat. Quis aliqua veniam aute duis qui velit ea aute laborum. Tempor consectetur mollit aliqua excepteur occaecat voluptate aliquip exercitation eu enim. Occaecat qui proident excepteur sunt laborum minim consequat. Consequat aliqua officia deserunt quis commodo proident aliqua enim culpa aute. Fugiat cillum deserunt aliqua fugiat dolor elit commodo.</p>  
                </main>
            </div>
        </>
     )
}

export default About;