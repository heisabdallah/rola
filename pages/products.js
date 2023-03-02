import styles from "../styles/products.module.scss"
import Header from "../components/Header"
import image1 from "public/images/rola1.jpg"
import Image from "next/image";

const Products = () => {
    return ( 
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1>Products PAGE</h1>
                <p>Sunt velit et mollit esse enim do cillum consectetur dolore excepteur magna. Nisi tempor minim anim ea magna ad voluptate in. Amet deserunt magna incididunt consectetur. Eu qui culpa sit minim dolor esse consequat.</p>
                <Image
                    src={image1}
                    width={500}
                    height={380}
                />
                <p>Eiusmod eu nulla ad duis veniam mollit commodo commodo dolor. Id cillum occaecat voluptate ipsum et laboris proident occaecat occaecat. Quis aliqua veniam aute duis qui velit ea aute laborum. Tempor consectetur mollit aliqua excepteur occaecat voluptate aliquip exercitation eu enim. Occaecat qui proident excepteur sunt laborum minim consequat. Consequat aliqua officia deserunt quis commodo proident aliqua enim culpa aute. Fugiat cillum deserunt aliqua fugiat dolor elit commodo.</p>

            </main>

        </div>
     );
}
 
export default Products;