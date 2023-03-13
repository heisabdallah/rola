import styles from "../styles/pages/products.module.scss"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CustomHead from "../components/props/customHead"
import logo from "public/logo.png"
import ProductsComp from "@/components/productsComp";
import ProductForm from "@/components/productForm";


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
                <main className={styles.main} onClick={handleCloseNav}>
                    <h1>All Products</h1>
                    <ProductsComp />
                    <ProductForm />
                </main>

            </div>
        </>
        
     );
}
 
export default Products;