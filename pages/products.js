import styles from "../styles/pages/products.module.scss"
import formStyle from "../styles/components/productForm.module.scss"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CustomHead from "../components/props/customHead"
import logo from "public/logo.png"
import ProductsComp from "../components/productsComp"


const Products = () => {

    const [nav, setNav] = useState(styles.nav)

    const handleOpenNav = () => {
        setNav(styles.openNav) 
    }

    const handleCloseNav = () => {
        setNav(styles.closeNav)
    }

    const productAPI = "api/products"

    return ( 
        <>
            <CustomHead
                title="Products"
                description="Rola spare parts products"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/products/"
            />
            <div className={styles.container}>
                <header className={styles.header}>
                    <svg className={styles.menuBtn} onClick={handleOpenNav} viewBox="0 0 100 80">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                    <h3>ROLA SPARE PARTS</h3>
                    <nav className={nav}>
                        <svg className={styles.closeBtn} onClick={handleCloseNav} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM15.6 17L12 13.4L8.4 17L7 15.6L10.6 12L7 8.4L8.4 7L12 10.6L15.6 7L17 8.4L13.4 12L17 15.6L15.6 17Z"/>
                        </svg>

                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logo}
                            width={34}
                            height={34}
                            alt="logo"
                        />
                    </Link>
                </header>
                <main className={styles.main} onClick={handleCloseNav}>
                    <h1>Products PAGE</h1>
                    <ProductsComp />
                    <div className={formStyle.form}>
                    <h3>Add a Product</h3><br></br>
                        <form method="POST" action={productAPI} >
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" />

                            <label for="make">Make:</label>
                            <input type="text" id="make" name="make" />

                            <label for="model">Model:</label>
                            <input type="text" id="model" name="model" />

                            <label for="price">Price:</label>
                            <input type="number" id="price" name="price" />

                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </main>

            </div>
        </>
        
     );
}
 
export default Products;