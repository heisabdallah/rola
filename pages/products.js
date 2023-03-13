import styles from "../styles/pages/products.module.scss"
import CustomHead from "../components/props/customHead"
import ProductsComp from "@/components/productsComp";
import ProductForm from "@/components/productForm";

const Products = () => {

    return ( 
        <>
            <CustomHead
                title="Products"
                description="Rola spare parts products"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/products/"
            />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>All Products</h1>
                    <ProductsComp />
                    <ProductForm />
                </main>
            </div>
        </>
     );
}
 
export default Products;